// Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden
// a continuación. (2 Puntos)
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados.

let num1 = parseInt(prompt("Ingrese el 1° numero"));
let num2 = parseInt(prompt("Ingrese el 2° numero"));
let num3 = parseInt(prompt("Ingrese el 3° numero"));
let num4 = parseInt(prompt("Ingrese el 4° numero"));
let num5 = parseInt(prompt("Ingrese el 5° numero"));

let suma = num1 + num2 + num3 + num4 + num5;
let promedio = suma / 5;

alert(`Si todo esta bien, la suma de los numeros son: ${suma} y el promedio es: ${promedio}`);