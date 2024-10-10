"use strict"
if (confirm("Почати тестування?")) {
	// Введення даних, позначення величин

	class Reminder {
		static instance
		intervalId = null
		counter = 0
		constructor(message, delay) {
			if (Reminder.instance) return Reminder.instance
			this.message = message
			this.delay = delay
			Reminder.instance = this
		}
		startReminder() {
			// перевірка, чи вже працює нагадувач
			if (this.intervalId) console.log(`Нагадувач вже працює!`)
			// якщо ні, встановлюємо
			this.intervalId = setInterval(() => {
				this.counter++
				alert(`Нагадування №${this.counter}: ${this.message}`)
			}, this.delay)
		}
		stopReminder() {
			// перевірка, чи вже є запущений нагадувач
			if (!this.intervalId) console.log(`Нагадувач ще не запущено!`)
			clearInterval(this.intervalId)
			this.intervalId = null
			console.log(`Нагадувач зупинено`)
		}
		// зміна повідомлення нагадувача
		changeMessage(newMes) {
			return this.message = newMes
		}
		toString() {
			return `Текст нагадування: "${this.message}"`
		}
	}

	// Обчислення результатів

	const reminder = new Reminder('Ми в тебе віримо!', 3000)
	// спроба створити ще один об'єкт нагадувача
	const reminder2 = new Reminder('Спроба провалилась!', 3000)
	// запускаємо нагадувач
	reminder.startReminder()
	// за 25 сек змінюємо текст нагадування
	setTimeout(() => {
		reminder.changeMessage('Скоро нагадування припиняться!')
	}, 25000)
	// за 30 секунд зупиняємо нагадувач
	setTimeout(() => {
		reminder.stopReminder()
	}, 30000)

	// Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<p>${reminder}</p>`)
	document.write(`<p>${reminder2}</p>`)
	// document.write(`<p>${reminder.stopReminder()}</p>`)
	document.write(`</div>`)
}
