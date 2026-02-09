MyApp.Modules.Cart = (() => {
	let times = [];

	return {
		addItem: (product) => {
			items.push(product);
			console.log(`Товар ${product} добавлен в корзину!`);
		},
		calculateTotal: () => {
			const total = items.reduce((sum, item) => sum + item.price, 0);
			console.log(`Общая стоимость товаров в корзине: ${total}`);
			return total;
		},
		getItem: () => [...items]
	};
})();