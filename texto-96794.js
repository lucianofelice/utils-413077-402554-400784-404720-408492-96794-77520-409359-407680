// texto-96794.js — Funciones de texto
// Autor: [Lautaro] - Legajo: 96794
function saludar(nombre) {
 return "Hola, " + nombre + "! Bienvenido al proyecto.";
}
function mayusculas(texto) {
 return texto.toUpperCase();
}
function contarCaracteres(texto) {
 return texto.length;
}
// Pruebas
console.log( saludar("Lautaro") );
console.log( mayusculas("desarrollo de software") );
console.log( "Caracteres:", contarCaracteres("UTN FRC") );