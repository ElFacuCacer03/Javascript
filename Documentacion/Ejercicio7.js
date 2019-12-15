'use strict'

/*
Tabla de MULTIPLICAR de un numero introducido por pantalla
*/

var numero = parseInt(prompt('¿De que NUMERO quieres la tabla?', 1));

document.write('<h1>Tabla del '+numero+'</h1>');

for(var i = 1; i <= 10; i++){
    document.write(i+' X '+numero+' = '+(i*numero)+'<br/>');
}

// TODAS las Tablas de MULTIPLICAR
for(var c = 1; c <= 10; c++){
document.write('<h1>Tabla del '+c+'</h1>');

for(var i = 1; i <= 10; i++){
    document.write(i+' X '+c+' = '+(i*c)+'<br/>');
}
}