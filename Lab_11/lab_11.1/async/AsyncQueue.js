export class AsyncQueue {
    constructor(concurrency = 1) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }

    add(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({ task, resolve, reject });
            this.process();
        });
    }

    async process() {
        while (this.running < this.concurrency && this.queue.length > 0) {
            const { task, resolve, reject } = this.queue.shift();
            this.running++;
            try {
                const result = await task();
                resolve(result);
            } catch (error) {
                reject(error);
            } finally {
                this.running--;
                this.process();
            }
        }
    }
}

export class RateLimiter {
    constructor(maxRequests, windowMs) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
        this.requests = [];
    }

    async acquire() {
        const now = Date.now();
        this.requests = this.requests.filter(time => now - time < this.windowMs);

        if (this.requests.length >= this.maxRequests) {
            const waitTime = this.windowMs - (now - this.requests[0]);
            console.log(`[RateLimiter] Waiting ${waitTime}ms`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            return this.acquire();
        }
        this.requests.push(now);
        return true;
    }
}