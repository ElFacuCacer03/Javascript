'use strict'

var numero = 444;
var texto1 = 'Bienvenido a Javascript,';
var texto2 = '  es un Lenguaje de PROGRAMACION  ';

// Remplazo de TEXTOS

var remplazar = texto1.replace('Javascript', 'JS'); // el metodo replace, nos permite remplazar una PALABRA de nuestra CADENA DE TEXTO.
    remplazar = texto2.slice(14); // el metodo slice, nos permite quitar PALABRA de nuestra CADENA DE TEXTO, desde un numero de caracter.
    remplazar = texto1.split(' '); // el metodo split, nos permite separar una parte de nuestra CADENA DE TEXTO, y el resultado nos lo devuelve en forma de un ARRAY.
    remplazar = texto2.trim(); // el metodo trim, nos permite quitar los ESPACIOS que tengamos al INICIO y al FINAL de nuestra CADENA DE TEXTO. 

console.log(remplazar);