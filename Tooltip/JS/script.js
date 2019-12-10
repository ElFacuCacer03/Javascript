'use strict'

const calcularPosicionToolTip = () => {
    const icono = document.querySelector('.icono');
    const tooltip = document.querySelector('.tooltip');
    
    const x = icono.offsetLeft;
    const y = icono.offsetTop;
    
    const anchoToolTip = tooltip.clientWidth;
    const altoToolTip = tooltip.clientHeight;
    
    const izquierda = x - (anchoToolTip / 2) + 15;
    const arriba = y - altoToolTip - 20;
    
    tooltip.style.left = `${izquierda}px`;
    tooltip.style.top = `${arriba}px`;
}

window.addEventListener('load', () => calcularPosicionToolTip());
window.addEventListener('resize', () => calcularPosicionToolTip());

const icono = document.querySelector('.icono');

icono.addEventListener('mouseenter', () => {
    tooltip.classList.add('active');
    calcularPosicionToolTip();
});

let timer;

icono.addEventListener('mouseleave', () => {
    timer = () => {
        setTimeout(() => {
            tooltip.classList.remove('active');
        }, 500);
    }
})

tooltip.addEventListener('mouseenter', () => clearTimeout(timer));

tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('active'));
