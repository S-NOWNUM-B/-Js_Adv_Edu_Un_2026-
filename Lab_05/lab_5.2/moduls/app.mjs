import { getAppInfo, getStatus } from './core.mjs';
import * as utils from './utils.mjs';
import { APP_CONFIG } from './constants.mjs';

document.getElementById('main-title').innerText = getAppInfo();
document.getElementById('app-status').innerText = getStatus();
utils.modLog('App initialized with config: ' + JSON.stringify(APP_CONFIG));

const statsBtn = document.getElementById('load-stats-btn');
statsBtn.addEventListener('click', async () => {
	try {
		const { renderStats } = await import('./advanced_feature.mjs');

		const mockData = 15400.50;
		const formatted = utils.formatCurrency(mockData, APP_CONFIG.currency);

		renderStats('#stats-container', formatted);
		statsBtn.remove();
	} catch (err) {
		console.log('Failed to load advanced features:', err);
	}
});

const reviewsSection = document.getElementById('reviews-section');

const observer = new IntersectionObserver(async (entries) => {
	if (entries[0].isIntersecting) {
		try {
			const module = await import('./lazy_component.mjs');
			module.renderReviews('#reviews-container');
		} catch (err) {
			console.log('Failed to load reviews component:', err);
		}
	}
}, { threshold: 0.5 });

observer.observe(reviewsSection);