'use strict'

// ARRAYS, ARREGLOS, MATICES
// Es una COLECCIÓN de DATOS, ya sea una CADENA DE TEXTO, VALOR NUMERO o un valor BOOLEAN

var nombre = 'Facundo Caceres';

var nombres = ['Facundo Caceres', 'Pablo Acosta', 'Jorge Dasilva', 52, true];

var lenguajes = new Array('PHP', 'JS', 'GO', 'Java', 'React');

console.log(nombres.length); // El metodo length, me permite saber cuantos elementos tengo en mi ARRAY
console.log(lenguajes[0]);

/* PRACTICA- Sacar un ELEMENTO del ARRAY
var elemento =  parseInt(prompt('¿Que elemento del ARRAY quieres?', 0));
if(elemento >= nombres.length){
    alert('Introduce el NUMERO CORRECTO menor que '+nombres.length);
}else{
    alert('El usuario seleccionado es '+nombres[elemento]);
}
*/
document.write('<ul>');

/* Manetra TRADICIONAL de RECORRER una ARRAY
document.write('<h1>Lenguajes de Programacion del 2019</h1>');
for(var i = 0; i < lenguajes.length; i++){
    document.write('<li>'+lenguajes[i]+'</li>');
}
*/

// RECORRER una ARRAY

/* METODO forEach
lenguajes.forEach((elemento, indice) => {
    document.write('<li>'+indice+' - '+elemento+'</li>');
});
*/

// METODO for in
for(let lenguaje in lenguajes){
    document.write('<li>'+lenguajes[lenguaje]+'</li>');
}

document.write('</ul>');

// BUSQUEDAS

var precios = [10, 20, 30, 40, 50];

var busqueda = lenguajes.find(lenguaje => lenguaje == 'JS');
     busqueda = lenguajes.findIndex(lenguaje => lenguaje == 'JS');

var busquedaNum = precios.some(precio => precio > 80);


console.log(busquedaNum);