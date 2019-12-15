'use strict'

/* SWITCH */

var edad = 18;
var licencia = '';

switch(edad){
    case 18:
        licencia = 'SI podes sacar la Licencia de Conducir';
    break;
    case 17:
            licencia = 'NO podes sacar la Licencia de Conducir';
    break;
    default:
        licencia = 'Eres un NIÑO';
    break ;
}

console.log(licencia);