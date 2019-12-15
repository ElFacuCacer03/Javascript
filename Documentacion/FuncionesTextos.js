'use strict'

// Transformacion de TEXTOS

var numero = 444;
var texto1 = 'Bienvenido a Javascript,';
var texto2 = 'es un Lenguaje de PROGRAMACION';

var dato = numero.toString(); // El metodo toString, nos permite cambiar un NUMERO a una CADENA DE TEXTO o string.
    dato = texto1.toUpperCase(); // El metodo toUpperCase, nos permite cambiar de minusculas a MAYUSCULAS.
    dato = texto2.toLocaleLowerCase(); // El metodo toLocaleLowerCase, nos permite cambiar de mayusculas a MINUSCULAS.

console.log(dato);

// Calcular LONGITUD

var nombre = 'Facundo';
    nombre = ['Facundo', 'Jonathan']

console.log(nombre.length); // El metodo length, nos permite saber cuantos caracteres tiene una CADENA DE TEXTO o el numero de ELEMENTO que tiene un ARRAYS.

// Concatenar - UNIR texto

//var textoTotal = texto1+' '+texto2;
var textoTotal = texto1.concat(' '+texto2); // El metodo concat, nos permite unir CADENAS DE TEXTOS.
console.log(textoTotal);