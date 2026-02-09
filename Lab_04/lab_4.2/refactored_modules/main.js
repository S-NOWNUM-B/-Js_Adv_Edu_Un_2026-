const Cart = MyApp.Modules.Cart;
const Utils = MyApp.Modules.Utils;

Cart.addItem({ id: 1, name: 'Товар 1', price: 1000 });
Cart.addItem({ id: 2, name: 'Товар 2', price: 200000 });

const finalPrice = Cart.calculateTotal();
console.log(`Итоговая стоимость: ${Utils.formatPrice(finalPrice)}`);