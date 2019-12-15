'use strict'

// LOCALSTORAGE

// COMPROBAR SI el LOCALSTORAGE es COMPATIBLE con el NAVEGADOR
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage DISPONIBLE");
}else {
    console.log("LocalStorage NO DISPONIBLE");
}

// GUARDAR DATOS en el LOCALSTROGE
localStorage.setItem("titulo", "Hola Mundo!");


// RECUPERAR ELEMENTO
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//GUARDAR OBJETOS 
var usuario = {
    nombre: "Facundo",
    email: "facundocaceresgorces@gmail.com",
    web: "facundocaceres.com"
}

// IMPORTANTE, cuando tenemos que enviar los datos al LOCALSTORAGE, tenemos que converir los OBJECTOS a string
localStorage.setItem("usuario", JSON.stringify(usuario));

// RECUPERAR OBJECTO
 var userJS = JSON.parse(localStorage.getItem("usuario"));

console.log(userJS);

document.querySelector("#datos").append(" "+userJS.web+" - "+userJS.nombre);

// BORAR LOS DATOS DEL LOCALSTORAGE
localStorage.clear();