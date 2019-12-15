'use strict'

// Fetch y peticiones a servicios / APIS REST

var divUsuarios = document.querySelector('#usuarios');
var divProfesor = document.querySelector('#profesor');
var divJanet = document.querySelector('#janet');


// El metodo fetch, nos permite acceder a los DATOS de un SERVCIO REMOTO
fetch('https://reqres.in/api/users?page=2')
    // CAPTURAMOS LOS DATOS y lo CONVERTIMOS en JSON
    getUsuarios()
        .then(data => data.json())
        // GUARDAMOS LOS USUARIOS
        .then(data => {
            usuarios = data;
            listadoUsuarios(users.data);
            return getInfo();
        })
        .then(data => {
            divProfesor.innerHTML = data;

            return getJanet();
        })
        .then( data => data.json())
        .then(user => {
            mostrarJanet(user.data);

        })
        .catch(error => {
            alert("Error en las PETICIONES");
        })

function getUsuarios (){
    return fetch("https://reqres.in/api/users?page=2");
}

function getJanet (){
    return fetch("https://reqres.in/api/users/2");
}


// CREAR UNA PROMESA
function getInfo (){
    var profesor = {
        nombre: "Facundo",
        apellidos: "Caceres",
        url: "htpp://facundocaceres.com"
    }
    return new Promise((resolve, reject) => {       
        setTimeout(function(){
            profesorString = JSON.stringify(profesor);

            if(typeof profesorString != 'string' || profesorString == '') return reject('error');
            return resolve(profesorString)
        }, 3000);

    });
}


function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTNL = i + "-" +user.first_name + " " +user.last_name;

        divUsuarios.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';
    });
}

function mostrarJanet(user){
    console.log(user);
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTNL = user.first_name + " " +user.last_name;
        avatar.src = user.avatar;
        avatar.style.width = '100%'
        divJanet.appendChild(avatar);

        divJanet.appendChild(nombre);

        document.querySelector('#janet .loading').style.display = 'none'
}
