import { config } from './config.mjs';

@param {numer} amount
@return {string}

export const formatPrice = (amount) => {
	return `${config.currency} ${amount.toFixed(2)}`;
};