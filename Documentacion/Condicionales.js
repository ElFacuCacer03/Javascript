'use strict'

/* Condicional IF */
// Si A es IGUAL a B haz algo

var edad = 74;
var nombre = 'Luis Suarez';

/* Operadores Relacionales
    Mayor: >
    Menor: <
    Igual: ==
    Mayor o Igual: >=
    Menor o Igual: <=
    Distino: !=
*/

if(edad >= 18){
    // Es MAYOR de EDAD
    console.log(nombre+ ' es MAYOR de Edad');

    if(edad == 33){
        console.log('Eres ADULTO');
    }else if(edad >= 70){
        console.log('Eres Anciano');
    }else{
        console.log('Eres Joven');
    }
}else{
    // Es MENOR de EDAD
    console.log(nombre+ ' es MENOR de Edad');
}

/* Operadores Logicos 
AND(Y): &&
OR(O): ||
Negación: !
*/

/* NEGACIÓN */
var año = 2019;
if(año != 2017){
    console.log('No estas en el año de 2017');
}

/* AND */
if(año >= 2000 && año <= 2999){
    console.log('Estas en el Siglo 21');
}else{
    console.log('NO estas en el Siglo 21');
}

/* OR */
if(año == 2009 || (año >= 2019 || año == 2029)){
    console.log('El Año acaba en 9');
}else{
    console.log('El Año NO acaba en 9');
}



