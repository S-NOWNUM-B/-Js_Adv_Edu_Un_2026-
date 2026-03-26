export class CancellableFetcher {
    constructor() {
        this.abortControllers = new Map();
    }

    fetch(url, id = 'default') {
        if (this.abortControllers.has(id)) {
            this.abortControllers.get(id).abort();
        }
        const controller = new AbortController();
        this.abortControllers.set(id, controller);

        return fetch(url, { signal: controller.signal })
            .finally(() => this.abortControllers.delete(id));
    }

    cancelAll() {
        this.abortControllers.forEach(c => c.abort());
        this.abortControllers.clear();
    }
}

export function withCancellation(promise, signal) {
    if (!signal) return promise;
    return Promise.race([
        promise,
        new Promise((_, reject) => {
            signal.addEventListener('abort', () => reject(new Error('Cancelled')));
        })
    ]);
}