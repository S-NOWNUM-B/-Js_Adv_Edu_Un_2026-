import * as Core from './core.mjs';
import { formatPrice } from './utils.mjs';

const cart = new Core.Cart();

const p1 = new Core.Product(1, 'Laptop', 999.99);

cart.addItem(p1, 3);

console.log(`Total: ${formatPrice(cart.getTotal())}`);