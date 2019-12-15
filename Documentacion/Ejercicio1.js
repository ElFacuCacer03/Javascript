'use strict'

/* 
Programa que pida DOS NUMEROS y que nos diga cual es el MAYOR, el MENOR y si son IGUALES
PLUS: Si no introduce un NUMERO o son MENORES o IGUALES a 0, nos los vuelva a pedir
*/

var numero1 = parseInt(prompt('Introduce el Primer Numero', 0));
var numero2 = parseInt(prompt('Introduce el Segundo Numero', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el Primer Numero', 0));
    numero2 = parseInt(prompt('Introduce el Segundo Numero', 0));
}

if(numero1 == numero2){
    alert('Los numeros son IGUALES');
}else if(numero1 > numero2){
    alert('El Numero MAYOR es: ' + numero1);
    alert('El Numero MENOR es: ' + numero2);
}else if(numero2 > numero1){
    alert('El Numero MAYOR es: ' + numero2);
    alert('El Numero MENOR es: ' + numero1);
}else{
    alert('Por favor introduce un numero CORRECTOS');
}
