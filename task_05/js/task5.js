"use strict"
if (confirm("Почати тестування?")) {
	// Введення даних, позначення величин

	// Клас для описування одного теста
	class TestData {
		constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
			this.firstNum = firstNum
			this.secondNum = secondNum
			this.operation = operation
			this.userAnswer = userAnswer
			this.correctAnswer = correctAnswer
		}
		toString() {
			return `Перше число: ${this.firstNum}, друге число: ${this.secondNum}, операція: ${this.operation}, відповідь користувача: ${this.userAnswer}, правильна відповідь: ${this.correctAnswer}`
		}
	}

	// Клас для зберігання історії тестування
	class History {
		constructor() {
			this.testList = []
		}
		addTest(newTest) {
			this.testList.push(newTest)
		}
		showHistory() {
			return this.testList.map((test) => `<p>${test.toString()}</p>`).join("")
		}
	}

	// Клас для перевірки таблиці множення
	class MultiChecker {
		static generateMultiTest(min = 1, max = 10) {
			const firstNum = Math.floor(Math.random() * (max - min + 1)) + min
			const secondNum = Math.floor(Math.random() * (max - min + 1)) + min
			const correctAnswer = firstNum * secondNum
			const userAnswer = parseInt(prompt(`Скільки дорівнює ${firstNum} * ${secondNum}?`))
			// перевіряємо, чи введена відповідь є коректною
			if (isNaN(userAnswer)) {
				alert("Введена відповідь некоректна")
				return MultiChecker.generateMultiTest(min, max)
			}
			return new TestData(firstNum, secondNum, "*", userAnswer, correctAnswer)
		}
	}

	// Клас для перевірки додавання
	class AddChecker {
		static generateAddTest(min = 1, max = 10) {
			const firstNum = Math.floor(Math.random() * (max - min + 1)) + min
			const secondNum = Math.floor(Math.random() * (max - min + 1)) + min
			const correctAnswer = firstNum + secondNum
			const userAnswer = parseInt(prompt(`Скільки дорівнює ${firstNum} додати ${secondNum}?`))
			// перевіряємо, чи введена відповідь є коректною
			if (isNaN(userAnswer)) {
				alert("Введена відповідь некоректна")
				return AddChecker.generateAddTest(min, max)
			} else return new TestData(firstNum, secondNum, "+", userAnswer, correctAnswer)
		}
	}

	class TestManager {
		static testManagerRef
		constructor(testNum, interval, min = 1, max = 10) {
			if (TestManager.testManagerRef) return TestManager.testManagerRef
			TestManager.testManagerRef = this
			this.testNum = testNum
			this.interval = interval
			this.max = max
			this.min = min
			this.history = new History()
			this.testCount = 0
		}
		// метод для початку тестування
		testStart() {
			// встановлюємо таймер
			const timer = setInterval(() => {
				if (this.testCount < this.testNum) {
					// рандомно обираємо тест
					const chooseTest = Math.random()
					const test =
						chooseTest < 0.5
							? MultiChecker.generateMultiTest(this.min, this.max)
							: AddChecker.generateAddTest(this.min, this.max)
					this.history.addTest(test)
					this.testCount++
				} else {
					// коли кількість тестів дорівнює встановленій, очищуємо таймер і виводимо історію тестування
					clearInterval(timer)
					const container = document.querySelector(".container")
					if (container) {
						container.innerHTML = this.history.showHistory()
					}
				}
			}, this.interval)
		}
		toString() {
			return `Згенеровано ${this.testNum} завдань з інтервалом ${this.interval} мс`
		}
	}

	// Обчислення результатів

	const testManager = new TestManager(5, 3000, 1, 10)
	const testManager2 = new TestManager(10, 2000, 1, 100)
	testManager.testStart()
	console.log(testManager2)

	// Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<p>${testManager}</p>`)
	document.write(`</div>`)
}
