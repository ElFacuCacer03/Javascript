'use strict'

/*
Que nos diga si un NUMERO es PAR o IMPAR
1. Ventana PROMPT
2. Si no es valido que nos PIDA introducir nuevamente el NUMERO
*/

var numero = parseInt(prompt('Introduce un numero', 0));

while(isNaN(numero)){
    var numero = parseInt(prompt('Introduce un numero', 0));
}

if(numero % 2 == 0){
    alert('Es un numero PAR');
}else{
    alert('Es un numero IMPAR');
}