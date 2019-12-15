'use strict'

/*
1. Pida 6 NUMEROS por pantalla y los meta en un ARRAY
2. Mostrar el ARRAY entero(TODOS sus ELEMENTOS) en el cuerpo de la PAGINA y en la CONSOLA
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos Elementos tiene el ARRAY
6. Busqueda de un VALOR introducido por el USUARIO, que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos, textoCustom = ''){
    document.write('<h1>Contenido del ARRAY'+textoCustom+'</h1>');
    document.write('<ul>');
    elementos.forEach((elemento, index) => {
    document.write('<li>'+elemento+'</li><br/>');
});
    document.write('</ul>');
}


// 1. Pida 6 NUMEROS por pantalla y los meta en un ARRAY

// var numeros = new Array(6);
var numeros = [];

for(var i = 0; i <= 5; i++){
    // numeros[i] = parseInt(prompt('INTRODUCE un NUMERO', 0));
    numeros.push(parseInt(prompt('INTRODUCE un NUMERO', 0)));
}

// 2. Mostrar el ARRAY entero(TODOS sus ELEMENTOS)

// En la CONSOLA
console.log(numeros);

// En el CUERPO DE LA PAGINA
mostrarArray(numeros);

// 3. Ordenarlo y mostrarlo
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, ' Ordenado');

// 4. Invertir su orden y mostrarlo
numeros.reverse();
mostrarArray(numeros, ' Invertido');

// 5. Mostrar cuantos Elementos tiene el ARRAY
document.write('<h1>El ARRAY tiene: '+numeros.length+'</h1>');

// 6. Busqueda de un VALOR introducido por el USUARIO, que nos diga si lo encuentra y su indice

var busqueda = parseInt(prompt('BUSCA un NUMERO', 0));

var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write('<h1>Encontrado</h1>');
    document.write('<h1>Posicion de la Busqueda: '+posicion+'</h1>');
}else{
    document.write('<h1>NO Encontrado</h1>');
}
