'use strict'

/*
Utilizando un BUCLE, mostrar la suma y la media de los NUMEROS introducidos
hasta introducir un NUMERO NEGATIVO y ahí mostrar el RESULTADO
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce NUMEROS hasta que pongas uno NEGATIVO', 0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        // suma+= numero;

        contador++;
    }

    console.log(suma);
    console.log(contador);
}while(numero >= 0)

alert('La SUMA de todos los numeros es: '+ suma);
alert('La MEDIA de todos los numeros es: '+ (suma/contador));