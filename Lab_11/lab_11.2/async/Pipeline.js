export class AsyncPipeline {
    constructor() {
        this.stages = [];
    }

    use(middleware) {
        this.stages.push(middleware);
        return this;
    }

    async execute(initialData, context = {}) {
        let data = initialData;
        for (const stage of this.stages) {
            data = await stage(data, context);
            if (data === null || data === undefined) break;
        }
        return data;
    }
}

// Утилиты для массивов
export async function mapParallel(items, handler, concurrency = 5) {
    const results = [];
    const chunks = [];
    for (let i = 0; i < items.length; i += concurrency) {
        chunks.push(items.slice(i, i + concurrency));
    }
    for (const chunk of chunks) {
        const res = await Promise.all(chunk.map(item => handler(item)));
        results.push(...res);
    }
    return results;
}

export class AsyncBatcher {
    constructor(handler, options = {}) {
        this.handler = handler;
        this.batchSize = options.batchSize || 10;
        this.queue = [];
        this.timer = null;
    }

    add(item) {
        return new Promise((resolve, reject) => {
            this.queue.push({ item, resolve, reject });
            if (this.queue.length >= this.batchSize) {
                this.flush();
            } else if (!this.timer) {
                this.timer = setTimeout(() => this.flush(), 100);
            }
        });
    }

    async flush() {
        if (this.timer) clearTimeout(this.timer);
        this.timer = null;
        if (this.queue.length === 0) return;

        const batch = this.queue.splice(0, this.batchSize);
        try {
            const results = await this.handler(batch.map(b => b.item));
            batch.forEach((b, i) => b.resolve(results[i]));
        } catch (e) {
            batch.forEach(b => b.reject(e));
        }
    }
}