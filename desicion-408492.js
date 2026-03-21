// decision-LEGAJOC.js — Funciones de decisión
// Autor: [Nombre] - Legajo: XXXXX
function esAprobado(nota) {
 if (nota >= 6) {
 return "Aprobado";
 } else {
    return "Desaprobado";
 }
}

function categoria(edad) {
 if (edad < 12) {
 return "Niño";
 } else if (edad < 18) {
 return "Adolescente";
 } else {
 return "Adulto";
 }
}
function maximo(a, b) {
 if (a > b) {
 return a;
 } else {
 return b;
 }
}
// Pruebas
console.log( esAprobado(7) );
console.log( esAprobado(4) );
console.log( categoria(15) );
console.log( "Máximo entre 8 y 12:", maximo(8, 12) );

