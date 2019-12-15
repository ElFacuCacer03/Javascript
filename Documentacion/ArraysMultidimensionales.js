'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'Rapidos y Furiosos', 'La vida es bella'];

console.log(peliculas.sort()); // El metodo sort, nos permite ORDENAR un ARRAY por ORDEN ALFABÉTICO (A-Z)
console.log(peliculas.reverse()); // El metodo sort, nos permite ORDENAR un ARRAY de forma INVERTIDA (Z-A)

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][1]);

var elemento = '';

/*
do{
    elemento = prompt('Intruduce tu PELICULA FAVORITA');
    peliculas.push(elemento); // el metodo push, nos permite AGREGAR un VALOR a nuestro ARRAY
}while(elemento != 'ACABAR');

peliculas.pop(); // El metodo POP, nos permite quitar el ULTIMO valor de nuestra ARRAY
*/

var indice = peliculas.indexOf('Rapidos y Furiosos');
if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculasTexto = peliculas.join(); // El metodo join, nos permite convertir un ARRAY en una CADENA DE TEXTO o string

var cadenaTexto = 'Hola, Bienvenido, Amigo';
var cadenaArray = cadenaTexto.split(', '); // El metodo split, nos permite convertir una CADENA DE TEXTO a una ARRAY

console.log( cadenaArray);
