// matematicas-LEGAJOB.js — Funciones matemáticas
// Autor: [Alberto Ahumada] - Legajo: 402554
function sumar(a, b) {
 return a + b;
}
function esPar(numero) {
 return numero % 2 === 0;
}
function promedio(a, b, c) {
 return (a + b + c) / 3;
}
// Pruebas
console.log( "Suma:", sumar(5, 3) );
console.log( "¿4 es par?", esPar(4) );
console.log( "¿7 es par?", esPar(7) );
console.log( "Promedio:", promedio(8, 7, 9) );
