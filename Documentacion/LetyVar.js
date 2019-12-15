'use strict'

// Pruebas con Let y Var

/* Prueba con VAR */
var numero = 40;
console.log(numero); // Valor 40

if(true){
    var numero = 50;
    console.log(numero); // Valor 50
}

console.log(numero); // Valor 40

/* Prueba con LET */
var texto = 'Curso JS Victor Robles';
console.log(texto); // Valor: Curso JS Victor Robles

if(true){
    let texto = 'Curso Master en Javascript';
    console.log(texto); // Valor: Curso Master en Javascript
}

console.log(texto); // Valor: Curso JS Victor Robles