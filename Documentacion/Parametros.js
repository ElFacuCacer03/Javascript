'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...RestodeFrutas){
    console.log('La Fruta 1 es: ', fruta1);
    console.log('La Fruta 2 es: ', fruta2);
    console.log(RestodeFrutas);
}

var frutas = ['Naranja', 'Manzana'];
listadoFrutas(...frutas, 'Sandia', 'Pera', 'Melon', 'Coco');

