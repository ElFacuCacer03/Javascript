'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var textoHora = `
    El Año es: ${year}
    El Mes es: ${mes}
    El Dia es: ${dia}
    La Hora es: ${hora}
`

console.log(textoHora);


// FUNCIONES MATEMATICAS

console.log(Math.ceil(Math.random()*10000));