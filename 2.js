let number = 25

let firstDigit = Math.floor(number / 10)
let secondDigit = number % 10

let newNumber = secondDigit * 10 + firstDigit

console.log("Перевернутое число: ", newNumber)