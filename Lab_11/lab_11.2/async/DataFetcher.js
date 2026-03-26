export class DataFetcher {
    constructor(httpClient) {
        this.client = httpClient;
    }

    async fetchUserWithDetails(userId) {
        try {
            const [user, posts, followers] = await Promise.all([
                this.client.get(`/users/${userId}`),
                this.client.get(`/users/${userId}/posts`),
                this.client.get(`/users/${userId}/followers`)
            ]);
            return { user, posts, followers, fetchedAt: new Date().toISOString() };
        } catch (error) {
            console.error('Error fetching user details:', error);
            throw error;
        }
    }

    async fetchMultipleUsers(userIds) {
        const results = await Promise.allSettled(
            userIds.map(id => this.client.get(`/users/${id}`))
        );

        const successful = results
            .filter(r => r.status === 'fulfilled')
            .map(r => r.value);
        
        const failed = results
            .filter(r => r.status === 'rejected')
            .map(r => ({ error: r.reason.message, id: r.reason.config?.id }));

        return { users: successful, failed, total: userIds.length };
    }

    async fetchWithFallback(primaryUrl, fallbackUrls) {
        const urls = [primaryUrl, ...fallbackUrls];
        for (const url of urls) {
            try {
                const data = await this.client.get(url);
                return { data, source: url };
            } catch (e) {
                console.warn(`Failed to fetch from ${url}, trying next...`);
            }
        }
        throw new Error('All fetch attempts failed');
    }
}