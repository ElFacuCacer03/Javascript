'use strict'

window.addEventListener('load', () => {
    console.log('DOM CARGADO');

    var formulario = document.querySelector("#formulario");
    var boxDashed = document.querySelector('.dashed');
    boxDashed.style.display = 'none';

    formulario.addEventListener('submit', function() {
        console.log('Evento SUBMIT CAPTURADO');
        
        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#edad').value);

        if(nombre.trim() == null || nombre.trim().lenght == 0){
            alert("El nombre NO es VALIDO");
            document.querySelector('#errorNombre').innerHTML = 'El nombre NO es VALIDO';

            return false;
        }else {
            document.querySelector('#errorNombre').style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().lenght == 0){
            alert("Los apellidos NO son VALIDOS");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad NO es VALIDA");
            document.querySelector('#errorEdad').innerHTML = 'La edad NO es VALIDA';
            document.querySelector('#errorEdad').style.display = 'block';
            return false;
        }else {
            document.querySelector('#errorEdad').style.display = 'none';
        }

        boxDashed.style.display = 'block';

        var pNombre = document.querySelector('#pNombre span');
        var pApellidos = document.querySelector('#pApellidos span');
        var pEdad = document.querySelector('#pEdad span');

        pNombre.innerHTML = nombre;
        pApellidos.innerHTML = apellidos;
        pEdad.innerHTML = edad;

        /*
        var datosUsuario = [nombre, apellido, edad];
        var indice;
        for(indice in datosUsuario){
            var parrafo = document.createElement("p");
            parrafo.append(datosUsuario[indice]);
            boxDashed.append(parrafo);
        }
        */
    });
    });


