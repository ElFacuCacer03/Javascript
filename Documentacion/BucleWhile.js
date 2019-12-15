'use strict'

// Bucle While

var año = 2019;

while(año != 1990){
    //Ejecuta esto
    console.log('Estamos en el año: '+año);

    if(año == 2000){
        break;
    }

    año--;
}

// DO While

var años = 30;

do{
    alert('SOLO CUANDO SEA DIFERENTE A 20');
    años--;
}while(años >= 25);