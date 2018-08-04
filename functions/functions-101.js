let convertFahrenheitTocelsius = function (fahrenheit) {
    let celsius = 5 / 9 * (fahrenheit - 32);
    return celsius;
    }

let tempOne = convertFahrenheitTocelsius(68);
let tempTwo = convertFahrenheitTocelsius(32);

console.log(tempOne);
console.log(tempTwo);