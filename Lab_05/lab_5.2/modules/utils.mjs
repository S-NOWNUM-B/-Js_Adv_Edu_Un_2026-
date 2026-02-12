export const formatCurrency = (amount, currency = 'USD') => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	}).format(amount);
};

export function modLog(message) {
	console.log(`[Module System]: ${message}`);
}