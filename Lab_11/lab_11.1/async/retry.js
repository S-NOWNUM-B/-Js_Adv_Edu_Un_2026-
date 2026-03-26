const DEFAULT_OPTIONS = {
    maxAttempts: 3,
    baseDelay: 1000,
    maxDelay: 10000,
    backoffMultiplier: 2,
    retryableStatuses: [408, 429, 500, 502, 503, 504],
    retryableErrors: ['NetworkError', 'TimeoutError'],
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function isRetryable(error, options) {
    if (error.status && options.retryableStatuses.includes(error.status)) {
        return true;
    }
    return options.retryableErrors.includes(error.name);
}

export async function withRetry(fn, options = {}) {
    const config = { ...DEFAULT_OPTIONS, ...options };
    let lastError;
    let delay = config.baseDelay;

    for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
            if (attempt === config.maxAttempts) {
                console.log(`[Retry] All ${config.maxAttempts} attempts failed`);
                throw error;
            }
            if (!isRetryable(error, config)) {
                console.log(`[Retry] Non-retryable error, stopping: ${error.message}`);
                throw error;
            }
            console.log(`[Retry] Attempt ${attempt}/${config.maxAttempts} failed. Waiting ${delay}ms...`);
            await sleep(delay);
            delay = Math.min(delay * config.backoffMultiplier, config.maxDelay);
        }
    }
    throw lastError;
}

export function withTimeout(promise, timeoutMs, timeoutError = 'Operation timed out') {
    return Promise.race([
        promise,
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error(timeoutError)), timeoutMs)
        )
    ]);
}

export async function withRetryAndTimeout(fn, options = {}) {
    const { timeout = 5000, ...retryOptions } = options;
    return withRetry(
        () => withTimeout(fn(), timeout),
        retryOptions
    );
}