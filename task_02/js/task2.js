"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	class CompanyCar {
		static companyCarRef
		constructor(driver, brand, number) {
			if (CompanyCar.companyCarRef) return CompanyCar.companyCarRef
			this.driver = driver
			this.brand = brand
			this.number = number
			CompanyCar.companyCarRef = this
		}
		toString() {
			return `Службове авто: <br>Водій: ${this.driver}, марка: ${this.brand}, номер: ${this.number}`
		}
	}

	// Крок 1. Обчислення результатів
	const companyCar1 = new CompanyCar('Петро Олійник', 'Audi', 'AO 9834 BM')
	const companyCar2 = new CompanyCar('Іван Сабов', 'BMW', 'AO 5289 AK')

	// крок 2. Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<p>${companyCar1}</p>`)
	document.write(`<p>${companyCar2}</p>`)
	document.write(`</div>`)
}
