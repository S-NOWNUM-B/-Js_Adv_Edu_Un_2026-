MyApp.Modules.Config = (() => {
	const settings = {
		currency: '$',
		taxRate: 0.08,
		shippingCost: 5
	};

	return {
		get: (key) => settings[key],
	};
})();