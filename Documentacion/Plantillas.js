'use strict'

// Plantillas de TEXTOS

var nombre = prompt('INTRODUCE TU NOMBRE');
var apellidos = prompt('INTRODUCE TUS APELLIDOS');

var texto = `
<h1>Mi nombre es: ${nombre}</h1>
<h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);