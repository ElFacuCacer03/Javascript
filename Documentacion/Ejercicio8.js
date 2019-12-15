'use strict'

/*
- Pida dos numeros por pantalla
- Si metemos uno mal que nos lo vuelva a pedir
- En el cuerpo de la PAGINA, en una ALERTA y por la CONSOLA el resultado del calculo
*/

var numero1 = parseInt(prompt('Introduce el PRIMER numero', 0));
var numero2 = parseInt(prompt('Introduce el SEGUNDO numero', 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el PRIMER numero', 0));
    numero2 = parseInt(prompt('Introduce el SEGUNDO numero', 0));
}

var resultado = 'La suma es: '+(numero1+numero2)+ '<br/>'+
                'La resta es: '+(numero1-numero2)+ '<br/>'+
                'La multiplicación es: '+(numero1*numero2)+ '<br/>'+
                'La división es: '+(numero1/numero2)+ '<br/>';

var resultadoCMD = 'La suma es: '+(numero1+numero2)+ ' \n'+
                'La resta es: '+(numero1-numero2)+ ' \n'+
                'La multiplicación es: '+(numero1*numero2)+ ' \n'+
                'La división es: '+(numero1/numero2)+ ' \n';

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);