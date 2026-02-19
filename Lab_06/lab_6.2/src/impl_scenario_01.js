class AppConfig {
	static instance = null;

	constructor() {
		if (AppConfig.instance) {
			return AppConfig.instance;
		}
		this.settings = {
			apiVaseUrl: 'https://api.example.com',
			locale: 'ru-RU',
			featureFlags: { darkMode: true, betaChecker: false },
		};
		AppConfig.instance = this;
	}

	get(key) {
		return this.settings[key];
	}

	set(key, value) {
		this.settings[key] = value;
	}

	static getInstance() {
		if (!AppConfig.instance) {
			AppConfig.instance = new AppConfig();
		}
		return AppConfig.instance;
	}
}

const cfg1 = AppConfig.getInstance();
const cfg2 = AppConfig.getInstance();

console.log("[SCENARIO_01] Are instances same?", cfg1 === cfg2);