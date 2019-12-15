'use strict'

// JSON (Javascript Object Notation)

var pelicula = {
    titulo: 'Batman VS Surperman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: "La verdad Duele" , year: 2016, pais: "Francia"},
    pelicula
];

// CAMBIAR el VALOR de un OBJECTO
pelicula.titulo = 'Superman';

var cajaPeliculas = document.querySelector('#peliculas');
var index;
for(index in peliculas){
    var p = document.createElement('p');
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    cajaPeliculas.append(p);
}