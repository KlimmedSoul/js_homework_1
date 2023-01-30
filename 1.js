let number = 275
let thirdDigit = number % 10
let firstSecondDigit = number / 10
let secondDigit = Math.floor(firstSecondDigit % 10)
let firstDigit = Math.floor(number / 100)

console.log("Первая цифра: ", firstDigit)
console.log("Вторая цифра: ", secondDigit)
console.log("Третья цифра: ", thirdDigit)