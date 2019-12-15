'use strict'

/*
Muestre TODOS los numeros divisores de un NUMERO introducido en PROMPT
*/

var numero = parseInt(prompt('Introduce un NUMERO', 1));

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
        console.log('Divisor: '+i);
    }
}