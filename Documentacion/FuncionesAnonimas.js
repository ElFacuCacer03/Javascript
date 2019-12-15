'use strict'

// Funciones ANONIMAS
// Es una Función que NO tiene NOMBRE

var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}

function sumame(numero1, numero2, sumaMuestra, sumaDos){
    var sumar = numero1 + numero2;

    sumaMuestra(sumar);
    sumaDos(sumar);

    return sumar;
}

sumame(5, 7, dato => {
    console.log("La SUMA es:", dato);
}, function(dato) {
    console.log("La suma por DOS es:", (dato*2));
});

