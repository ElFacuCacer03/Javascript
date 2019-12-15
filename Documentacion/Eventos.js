'use strict'

// el evento LOAD, nos permite ejecuta el codigo Javascript después que halla cargado el DOM (Document Object Model)
window.addEventListener('load', () => {
// EVENTOS DEL RATON

    function cambiarColor(){
        console.log('Me has Presionado!');
        var background = boton.style.background;
        if(background == "red"){
            boton.style.background ="red";
            boton.style.padding ='10px';
        }else{
            boton.style.background ="green";
        }
        return true;
    }
    
    var boton = document.querySelector('#boton');
    
    // CLICK
    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border = '10px solid black';
    });
    
    // MOUSE OVER
    boton.addEventListener('mouseover', function(){
        boton.style.background='yellow';
    });
    
    // MOUSE OUT
    boton.addEventListener('mouseout', function(){
        boton.style.background='#000';
    });
    
    // FOCUS
    var input = document.querySelector('#nombre');
    input.addEventListener('focus', function(){
        console.log('[focus] ESTAS DENTRO DEL INPUT!');
    });
    
    // BLUR
    input.addEventListener('blur', function(){
        console.log('[blur] ESTAS FUERA DEL INPUT!');
    });
    
    // KEYDOWN
    input.addEventListener('keydown', function(event){
        console.log('[keydown] Pulsando esta TECLA', String.fromCharCode(event.keyCode));
    });
    
    // KEYPRESS
    input.addEventListener('keypress', function(event){
        console.log('[keypress] Tecla PRESIONADA', String.fromCharCode(event.keyCode));
    });
    
    // KEYUP
    input.addEventListener('keyup', function(event){
        console.log('[keyup] Tecla SOLTADA', String.fromCharCode(event.keyCode));
    });
});

