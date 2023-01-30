let firstNumber = 4
let secondNumber = 55
let thirdNumber = 9

let cubeModulFirstNumber = Math.abs(firstNumber ** 3)
let cubeModulSecondtNumber = Math.abs(secondNumber ** 3)
let cubeModulThirdNumber = Math.abs(thirdNumber ** 3)

let sqrFirstNumber = firstNumber ** 2
let sqrSecondNumber = secondNumber ** 2
let sqrThirdNumber = thirdNumber ** 2

let Average = (cubeModulFirstNumber + cubeModulSecondtNumber + cubeModulThirdNumber) / 3

let geoAverage = Math.sqrt(sqrFirstNumber * sqrSecondNumber * sqrThirdNumber)

console.log("Среднее арифметическое модулей кубов чисел: ", Average.toFixed(2))
console.log("Среднее геометрическое квадратов чисел: ", geoAverage)