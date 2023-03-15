const products = [
	{ name: "Product 1", price: 20, category: "Electronics" },
	{ name: "Product 2", price: 30, category: "Clothes" },
	{ name: "Product 3", price: 40, category: "Electronics" },
	{ name: "Product 4", price: 50, category: "Clothes" },
	{ name: "Product 5", price: 60, category: "Clothes" },
	{ name: "Product 6", price: 70, category: "Electronics" },
	{ name: "Product 7", price: 80, category: "Clothes" },
	{ name: "Product 8", price: 90, category: "Electronics" },
];

function categoryAnalysis(products, price = 50) {
	let pc = {};
	let abovePrice = [];
	products.forEach((product) => {
		if (pc[product.category]) {
			pc[product.category] = [
				...pc[product.category],
				{ name: product.name, price: product.price },
			];
		} else {
			pc[product.category] = [
				{
					name: product.name,
					price: product.price,
				},
			];
		}
	});

	Object.keys(pc).forEach((c) => {
		let average = pc[c].reduce((acc, p) => acc + p.price, 0) / pc[c].length;
		if (average > 50) {
			abovePrice = [...abovePrice, { category: c, average: average }];
		}
	});

	return abovePrice;
}

console.log(categoryAnalysis(products));
