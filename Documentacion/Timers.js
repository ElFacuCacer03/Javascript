'use strict'

window.addEventListener('load', () => {
    // TIMERS

    // El evento setInterval, se EJECUTA de forma INFINITA, cada cierto tiempo

    function intervalo(){
        var tiempo = setInterval(function (){
            console.log('setInterval EJECUTADO');
    
            var titulo = document.querySelector('h1');
    
            // CAMBIAR COLOR DE H1
            if(titulo.style.color == 'yellow'){
                titulo.style.color= 'blue';
            }else{
                titulo.style.color= 'yellow';
            }
        }, 500);

        return tiempo;
    }

   // El evento setTimeout, se EJECUTA solo una VEZ

   /*
   var tiempo = setTimeout(function (){
    console.log('setTimeout EJECUTADO');

    var titulo = document.querySelector('h1');

    // CAMBIAR COLOR DE H1
    if(titulo.style.color == 'yellow'){
        titulo.style.color= 'blue';
    }else{
        titulo.style.color= 'yellow';
    }
}, 500);
    */

    var tiempo = intervalo();

    var stop = document.querySelector('#stop');
    stop.addEventListener('click', function (){
        alert('Has PARADO el INTERVALO en BUCLE');
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');
    start.addEventListener('click', function(){
        alert('Has INICIADO INTERVALO en BUCLE');
        intervalo();
    });
});