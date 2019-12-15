'use strict'

// DOM (Document Object Model)

function cambiarColor(color){
    contenedor.style.background = color;
}

/* CONSEGUIR elementos con un ID en CONCRETO

var contenedor= document.getElementById('contenedor');
var contenedor = document.querySelector('#contenedor');

Modificamos el CONTENIDO del CONTENEDOR
contenedor.innerHTML = 'Texto dentro de un Contenedor desde JS';

AGREGAMOS ESTILOS al CONTENEDOR
contenedor.style.padding = '20px';
contenedor.style.color = '#fff';
contenedor.style.textAlign = 'center';


contenedor.className = 'caja'; // La propiedad className, nos permite agregar una clase a nuestra ETIQUETA HTML

console.log(contenedor);

cambiarColor('blue');

*/

// CONSEGUIR elementos por su ETIQUETA

var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector('#seccion');
var hr = document.createElement('hr');

var contenidoTexto = todosLosDivs[2];
contenidoTexto.innerHTML = 'Modificando texto con el innerHTML';
contenidoTexto.style.background = 'red';
contenidoTexto.style.color = '#fff';
contenidoTexto.style.padding = '20px';

console.log(todosLosDivs);


var valor;
for(valor in todosLosDivs){
    if( typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement('p')
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        document.querySelector('#seccion').appendChild(parrafo);
    }
}

seccion.append(hr);

// CONSEGUIR elementos por su CLASE CSS

var divsRojo = document.getElementsByClassName('rojo');
var div;

var divsAmarillo = document.getElementsByClassName('amarillo')
divsAmarillo[0].style.background = 'yellow';

for(div in divsRojo){
    if(divsRojo[div].className == 'rojo'){
        divsRojo[div].style.background = 'red';
    }
}

// Query Selector

var id = document.querySelector('#encabezado');
console.log(id);

var claseRojo = document.querySelector('.rojo');
console.log(claseRojo);

var etiqueta = document.querySelector('div');
console.log(etiqueta);

