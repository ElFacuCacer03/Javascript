'use strict'

var numero = 444;
var texto1 = 'Bienvenido a Javascript,';
var texto2 = 'es un Lenguaje de PROGRAMACION';

// Busqueda de TEXTOS
var busqueda = texto1.indexOf('Javascript'); // el metodo indexOf, nos permite ubicar en que numero de caracter esta una PALABRA o FRASE.
    busqueda = texto2.lastIndexOf('es');
    busqueda = texto1.search('a');
    busqueda = texto1.match('Bienvenido'); // el metodo match, nos permite buscar palabras o frases, y nos devuelve el resultado en un ARRAY.
    busqueda = texto2.substr(0, 14); // el metodo substr, nos permite buscar las palabras que esten DESDE un numero de caracter HASTA otro numero de caracter.
    busqueda = texto1.charAt(5); // el metodo charAt, nos permite buscar una palabra concreta de nuestra CADENA DE TEXTO.
    busqueda = texto2.startsWith('es'); // el metodo startsWith, nos permite verificar si la PALABRA esta al INICIO de nuestra CADENA DE TEXTO, y nos devuelve el resultado en un valor Boolean
    busqueda = texto2.endsWith('PROGRAMACION'); // el metodo endsWith, nos permite verificar si la PALABRA esta al FINAL de nuestra CADENA DE TEXTO, y nos devuelve el resultado en un valor Boolean
    busqueda = texto1.includes('a'); // el metodo includes, nos permite verificar si la PALABRA existe dentro de nuestra CADENA DE TEXTO,y nos devuelve el resultado en un valor Boolean

// Remplazo de TEXTOS


console.log(busqueda);