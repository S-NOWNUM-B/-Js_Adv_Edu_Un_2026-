MyApp.Modules.Utils = (() => {
	return {
		formatPrice: (amount) => {
			const currency = MyApp.Modules.Config.get('currency');
			return `${currency}${amount.toFixed(2)}`;
		},

		isValid: (val) => val !== null && val !== undefined
	};
})();