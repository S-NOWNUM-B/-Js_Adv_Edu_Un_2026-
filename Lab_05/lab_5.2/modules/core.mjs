import { APP_CONFIG } from './constants.mjs';

export const getAppInfo = () => {
	return `${APP_CONFIG.title} - Version ${APP_CONFIG.version} (API Status: ${APP_CONFIG.apistatus})`;
};

export const getStatus = () => {
	return `System Status: ${APP_CONFIG.apiStatus}`;
}