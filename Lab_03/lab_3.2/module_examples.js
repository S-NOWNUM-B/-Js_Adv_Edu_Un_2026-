const basicModule = (function() {
	return {
		sayHello() {
			console.log("Hello, World!");
		}
	};
})();

const basketModule = (function() {
	const basket = [];

	function doSomethingPrivate() {
		console.log("Выполняется приватня логика...");
	}

	return {
		addItem(item) {
			basket.push(item);
			doSomethingPrivate();
		},
		getItemCount() {
			return basket.length;
		}
	};
})();

basicModule.sayHello();
basketModule.addItem({name: 'Laptope', price: 1000});
console.log(`В корзине ${basketModule.getItemCount()} товаров`);