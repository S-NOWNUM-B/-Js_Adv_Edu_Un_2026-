const LegacyBankGateway = {
	processPayment(cardNumber, amount, currencyCode) {
		console.log(`[Legacy] Processing payment of ${amount} ${currencyCode} for card ${cardNumber}`);
		return { success: true, transactionID: 'TXN-' + Date.now() };
	}
};

class PaymentAdapter {
	constructor(legacyGateway) {
		this.legacyGateway = legacyGateway;
	}

	charge({ amount, currency, cardToken }) {
		return this.legacyGateway.processPayment(cardToken, amount, currency);
	}
}

const paymentAdapter = new PaymentAdapter(LegacyBankGateway);
const paymentResult = paymentAdapter.charge({ amount: 100, currency: 'USD', cardToken: '4111111111111111' });
console.log("[SCENARIO_02] Payment result:", paymentResult);