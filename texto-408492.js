// texto-LEGAJOA.js — Funciones de texto
// Autor: [Nombre] - Legajo: 408492
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
console.log( saludar("Ana") );
console.log( mayusculas("desarrollo de software") );
console.log( "Caracteres:", contarCaracteres("UTN FRC") );