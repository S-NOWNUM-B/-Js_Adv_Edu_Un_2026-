import { withRetryAndTimeout } from './retry.js';

export class DataFetcher {
    constructor(client, options = {}) {
        this.client = client;
        this.options = {
            timeout: 7000,
            maxAttempts: 3,
            ...options,
        };
    }

    async fetchUser(userId) {
        return withRetryAndTimeout(
            () => this.client.get(`/users/${userId}`),
            this.options
        );
    }

    async fetchPostsByUser(userId) {
        return withRetryAndTimeout(
            () => this.client.get(`/posts?userId=${userId}`),
            this.options
        );
    }

    async fetchUserWithDetails(userId) {
        const [user, posts] = await Promise.all([
            this.fetchUser(userId),
            this.fetchPostsByUser(userId),
        ]);

        return { user, posts };
    }
}
