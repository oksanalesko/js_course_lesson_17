"use strict"
if (confirm("Почати тестування?")) {
	// Введення даних, позначення величин
	// Описуємо клас виробника
	class Manufacturer {
		constructor(brand, registrationNumber) {
			this.brand = brand
			this.registrationNumber = registrationNumber
		}
		toString() {
			return `Назва фірми-виробника: ${this.brand}, реєстраційний номер: ${this.registrationNumber}`
		}
	}
	// Описуємо клас товару
	class Product {
		constructor(title, unitOfMeasure, quantity, manufacturerData) {
			this.title = title
			this.unitOfMeasure = unitOfMeasure
			this.quantity = quantity
			this.manufacturer = new Manufacturer(manufacturerData.brand, manufacturerData.registrationNumber)
		}
		toString() {
			return `<br>${this.title} – ${this.quantity} ${this.unitOfMeasure}, Виробник: ${this.manufacturer.toString()}`
		}
	}
	// Описуємо клас складу
	class Warehouse {
		constructor() {
			this.products = []
		}
		// Додавання нового товару
		addProduct(newProduct) {
			this.products.push(newProduct)
		}
		// Відвантаження товару, якщо він є на складі і його кількість достатня
		shipProduct(productTitle, productQuantity) {
			const product = this.products.find((prod) => prod.title === productTitle)
			if (!product || product.quantity < productQuantity) {
				return `Товар ${productTitle} відсутній на складі або його кількості недостатньо.`
			} else {
				product.quantity -= productQuantity
				return `Відвантажено ${productQuantity} одиниць товару ${productTitle}. Залишилось ${product.quantity} ${product.unitOfMeasure}.`
			}
		}
		// Фільтрація за навзою товару
		filterByProductTitle(productTitle) {
			const filteredProducts = this.products.filter((prod) => prod.title === productTitle)
			if (filteredProducts.length > 0) return filteredProducts
			else return `Товарів з назвою ${productTitle} не знайдено на складі.`
		}
		// Фільтрація за назвою виробника
		filterByProductBrand(productBrand) {
			const filteredProducts = this.products.filter((prod) => prod.manufacturer.brand === productBrand)
			if (filteredProducts.length > 0) return filteredProducts
			else return `Товарів від виробника ${productBrand} не знайдено на складі.`
		}
		toString() {
			return this.products.map(product => `<p>${product.toString()}</p>`).join("");
		}
	}

	// Обчислення результатів
	const product1 = new Product("Шампунь", "фл.", 55, {brand: "Nivea", registrationNumber: "65634957"})
	const product2 = new Product("Мило", "шт.", 28, {brand: "Palmolive", registrationNumber: "82625254"})
	const product3 = new Product("Пральний порошок", "кг", 16, {brand: "Ariel", registrationNumber: "976403"})
	const product4 = new Product("Рідкий засіб для прання", "л", 22, {brand: "Pervol", registrationNumber: "234526"})
	const product5 = new Product("Крем для обличчя", "шт.", 18, {brand: "Nivea", registrationNumber: "73363222"})

	const warehouse = new Warehouse()
	warehouse.addProduct(product1)
	warehouse.addProduct(product2)
	warehouse.addProduct(product3)
	warehouse.addProduct(product4)
	warehouse.addProduct(product5)

	// Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<div>${warehouse.toString()}</div>`)
	document.write(`<p>${warehouse.shipProduct("Мило", 22)}</p>`)
	document.write(`<p>${warehouse.shipProduct("Крем для обличчя", 22)}</p>`)
	document.write(`<p>Від виробника Palmolive на складі є: ${warehouse.filterByProductBrand('Palmolive')}</p>`)
	document.write(`<p>Від виробника Nivea на складі є: ${warehouse.filterByProductBrand('Nivea')}</p>`)
	document.write(`<p>Від виробника Tide на складі є: ${warehouse.filterByProductBrand('Tide')}</p>`)
	document.write(`<p>На складі є продукту "Мило": ${warehouse.filterByProductTitle('Мило')}</p>`)
	document.write(`</div>`)
}