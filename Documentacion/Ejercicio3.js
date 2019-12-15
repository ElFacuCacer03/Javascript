'use strict'

/*
Hacer un programa que muestre TODOS los NUMEROS entre DOS numeros introducidos por el USUARIO
*/

var numero1 = parseInt(prompt('Introduce el PRIMER NUMERO', 0));
var numero2 = parseInt(prompt('Introduce el SEGUNDO NUMERO', 0));

document.write('<h1>De '+numero1+' a '+numero2+' estan estos numeros<h1/>')
for(var i = numero1; i <= numero2; i++){
    document.write(i+'<br/>')
}