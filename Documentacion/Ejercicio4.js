'use strict'

/*
Mostrar TODOS los numeros IMPARES que hay entre DOS numeros introducidos por el USUARIO
*/

var numero1= parseInt(prompt('Introduce el PRIMER numero', 0));
var numero2 = parseInt(prompt('Introduce el SEGUNDO numero', 0));

while(numero1 < numero2){
    numero1++

    if(numero1%2 != 0){
        console.log('El '+numero1+' es IMPAR')
    }
}