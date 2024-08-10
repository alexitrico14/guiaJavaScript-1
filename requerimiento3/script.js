// Conversion Celcius a Kelvin y Fahrenheit

let celcius = parseInt(prompt("Ingresa los °Celcius a convertir"));


let kelvin = celcius + 273.15;
let fahrenheit = (celcius * 9/5) + 32;

alert(`Este es Kelvin: ${kelvin} y esto es Fahreneit: ${fahrenheit}`)
