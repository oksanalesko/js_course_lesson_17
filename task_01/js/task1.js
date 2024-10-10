"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	class ArrayUtils {
		// Статичний метод для підрахунку додатніх
		static CountPositiveEl(arr) {
			return arr.reduce((prevCount, num) => num > 0 ? prevCount + 1 : prevCount, 0)
		}
		// Статичний метод для підрахунку від'ємних
		static CountNegativeEl(arr) {
			return arr.reduce((prevCount, num) => num < 0 ? prevCount + 1 : prevCount, 0)
		}
		// Статичний метод для підрахунку кількості входжень числа
		static CountNumOccurrences(arr, val) {
			const numValCount = arr.reduce((prevCount, num) => num === val ? prevCount + 1 : prevCount, 0)
			return numValCount ? numValCount : `Числа ${val} нема у масиві`
		}
	}

	// Крок 1. Обчислення результатів

	const numbers = [1, -2, 3, -4, 3, 0]

	// крок 2. Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<p>Додатніх елементів: ${ArrayUtils.CountPositiveEl(numbers)}</p>`)
	document.write(`<p>Від'ємних елементів: ${ArrayUtils.CountNegativeEl(numbers)}</p>`)
	document.write(`<p>Кількість входжень числа: ${ArrayUtils.CountNumOccurrences(numbers, 5)}</p>`)
	document.write(`</div>`)
}
