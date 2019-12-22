'use strict'
window.addEventListener('load', () => {
    const tarjeta = document.querySelector('#tarjeta'),
          btnAbrirFormulario = document.querySelector('#btnAbrirFormulario'),
          formulario = document.querySelector('#FormularioTarjeta'),
          numeroTarjeta = document.querySelector('#tarjeta .numero'),
          nombreTarjeta = document.querySelector('#tarjeta .nombre'),
          logoMarca = document.querySelector('#logoMarca'),
          firma = document.querySelector('#tarjeta .firma p'),
          mesExpiracion = document.querySelector('#tarjeta #expiracion .mes'),
          yearExpiracion = document.querySelector('#tarjeta #expiracion .year'),
          ccv = document.querySelector('#tarjeta .ccv');

    // VOLTEAMOS LA TARJETA PARA MOSTAR EL FRENTE.
    const mostrarFrente = () => {
        if(tarjeta.classList.contains('active')){
            tarjeta.classList.remove('active');
        }
    }

    // ROTACION DE LA TARJETA
    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('active');
    });

    // ANIMACIÓN DEL BOTÓN ABRIR FORMULARIO
    btnAbrirFormulario.addEventListener('click', () => {
        btnAbrirFormulario.classList.toggle('active');
        formulario.classList.toggle('active');
    });

    // SELECTBOX MES GENERADOS DINAMICAMENTE
    for(let i = 1; i <= 12; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectMes.appendChild(opcion);
    }
    // SELECTBOX AÑO GENERADOS DINAMICAMENTE
    const yearActual = new Date().getFullYear();
    for(let i = yearActual; i <+ yearActual + 8; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectYear.appendChild(opcion);
    }

    // INPUT NUMERO DE TARJETA
    formulario.inputNumero.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;

        formulario.inputNumero.value = valorInput
        // Eliminamos ESPACIOS EN BLANCO
        .replace(/\s/g, '')
        // Eliminar las LETRAS
        .replace(/\D/g, '')
        // Ponemeos ESPACIO cada 4 NUMEROS
        .replace(/([0-9]{4})/g, '$1 ')
        // ELIMINA EL ULTIMO ESPACIADO
        .trim();

        numeroTarjeta.textContent = valorInput;

        if(valorInput == ''){
            numeroTarjeta.textContent = '#### #### #### ####';

            logoMarca.innerHTML = '';
        }

        if(valorInput[0] == 4){
            logoMarca.innerHTML = '';
            const imagen = document.createElement('img');
            imagen.src = '../IMG/Logos/visa.png';
            logoMarca.appendChild(imagen);
        } else if(valorInput[0] == 5){
            logoMarca.innerHTML = '';
            const imagen = document.createElement('img');
            imagen.src = '../IMG/Logos/mastercard.png';
            logoMarca.appendChild(imagen);  
        } else if(valorInput[0] == 3){
            logoMarca.innerHTML = '';
            const imagen = document.createElement('img');
            imagen.src = '../IMG/Logos/amex.png';
            logoMarca.appendChild(imagen);
        }

        // VOLTEAMOS LA TAREJTA PARA QUE EL USUARIO VEA EL FRENTE.
        mostrarFrente();
    });

    // INPUT NOMBRE DE TARJETA
    formulario.inputNombre.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;

        formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
        nombreTarjeta.textContent = valorInput;
        firma.textContent = valorInput;

        if(valorInput == ''){
            nombreTarjeta.textContent = 'Jhon Doe';
        }

        // VOLTEAMOS LA TAREJTA PARA QUE EL USUARIO VEA EL FRENTE.
        mostrarFrente();
    });

    // SELECT MES
    formulario.selectMes.addEventListener('change', (e) => {
        mesExpiracion.textContent = e.target.value;

        // VOLTEAMOS LA TAREJTA PARA QUE EL USUARIO VEA EL FRENTE.
        mostrarFrente();
    });

    // SELECT AÑO
    formulario.selectYear.addEventListener('change', (e) => {
        yearExpiracion.textContent = e.target.value.slice(2);

        // VOLTEAMOS LA TAREJTA PARA QUE EL USUARIO VEA EL FRENTE.
        mostrarFrente();
    });

    // CCV
    formulario.inputCCV.addEventListener('keyup', () => {
        if(!tarjeta.classList.contains('active')){
            tarjeta.classList.toggle('active');
        }

        formulario.inputCCV.value = formulario.inputCCV.value
        // Eliminamos ESPACIOS EN BLANCO
        .replace(/\s/g, '')
        // Eliminar las LETRAS
        .replace(/\D/g, '');

        ccv.textContent = formulario.inputCCV.value;
    });
});