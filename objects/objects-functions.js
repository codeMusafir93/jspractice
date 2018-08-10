let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temps = convertFahrenheit(235)
console.log(temps.fahrenheit)
console.log(`${fahrenheit} in celsius is ${temps.celsius}`)
console.log(temps.kelvin)

