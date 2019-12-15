'use strict'

// Funciones
// Una Función es una agrupación reutilizable de un conjunto de instrucciones

// Defino la FUNCIÓN

function consola(numero1, numero2){
    console.log('Suma: '+ (numero1+numero2));
    console.log('Resta: '+ (numero1-numero2));
    console.log('Multiplicacion: '+ (numero1*numero2));
    console.log('--------------------------------------');
}

function documento(numero1, numero2){
    document.write('Suma: '+ (numero1+numero2)+'<br/>');
    document.write('Resta: '+ (numero1-numero2)+'<br/>');
    document.write('Multiplicacion: '+ (numero1*numero2)+'<br/>');
    document.write('--------------------------------------'+'<br/>');
}

function calculadora(numero1, numero2, mostrar = false){
    // Conjunto de INSTRUCCIONES a EJECUTAR

    if(mostrar == false){
        consola(numero1, numero2);
    }else{
        documento(numero1, numero2);
    }

    return true;
}

// INVOCAR o LLAMAR a la función
calculadora(1, 4);
calculadora(1, 2, true);
calculadora(8, 8);

/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}
*/