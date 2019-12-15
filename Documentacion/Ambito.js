'use strict'

var texto = 'Hola, soy una VARIABLE GLOBAL';
var numero = 12;

function holaMundo(texto){
    var hola = 'Hola soy una VARIABLE dentro de una FUNCIÓN';

    console.log(texto);
    console.log(typeof numero.toString()); // El metodo toString, nos permite cambiar un NUMERO a una CADENA DE TEXTO o string.
    console.log(hola);
}

holaMundo(texto);

console.log(hola); // NO podemos ACCEDER a la VARIABLE, porque cuando esta dentro de una FUNCIÓN es una VARIABLE LOCAL.