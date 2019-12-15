'use strict'
window.addEventListener('load', () => {

    const btnDepartamentos = document.getElementById('btn-departamentos'),
        btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
        grid = document.getElementById('grid'),
        btnRegresar = document.querySelector('.btn-regresar'),
        contenedorEnlacesNav = document.querySelector('.contenedor-enlaces-nav'),
        contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
        dispositivoMovil = () => window.innerWidth <= 768;

    btnDepartamentos.addEventListener('mouseover', () => {
        if(!dispositivoMovil()){
            grid.classList.add('active');
        }
    });

    grid.addEventListener('mouseleave', () => {
        if(!dispositivoMovil()){
            grid.classList.remove('active');
        }
    });

    document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
        elemento.addEventListener('mouseenter', (e) => {
            if(!dispositivoMovil()){
                document.querySelectorAll('#menu .sub-categoria').forEach((categoria) => {
                    
                    categoria.classList.remove('active');
    
                    if(categoria.dataset.categoria == e.target.dataset.categoria){
                        categoria.classList.add('active')
                    }
                });
            }
        });
    });

    // EventListeners para DISPOSITIVOS MOVIL
    document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
        e.preventDefault();
        if(contenedorEnlacesNav.classList.contains('active')){
            contenedorEnlacesNav.classList.remove('active');
            document.querySelector('body').style.overflow = 'visible';
        }else{
            contenedorEnlacesNav.classList.add('active');
            document.querySelector('body').style.overflow = 'hidden';
        }
    });

    // EVENTO DE TIPO CLICK PARA EL BOTON DE TODOS LOS DEPARTAMENTOS
    btnDepartamentos.addEventListener('click', (e) => {
        e.preventDefault();
            grid.classList.add('active');
            btnCerrarMenu.classList.add('active');
    });

    // EVENTO DE TIPO CLICK PARA EL BOTON DE REGRESAR
    btnRegresar.addEventListener('click', (e) => {
        e.preventDefault();
        grid.classList.remove('active');
        btnCerrarMenu.classList.remove('active');
    });

    document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
        elemento.addEventListener('click', (e) => {
            if(dispositivoMovil()){
                contenedorSubCategorias.classList.add('active');
                document.querySelectorAll('#menu .sub-categoria').forEach((categoria) => {
                    categoria.classList.remove('active');
                    if(categoria.dataset.categoria == e.target.dataset.categoria){
                        categoria.classList.add('active');
                    }
                });
            }
        });
    });

    // EVENTO DE TIPO CLICK PARA EL BOTON DE REGRESAR
    document.querySelectorAll('#grid .contenedor-subcategorias .sub-categoria .enlaces-subcategoria .btn-regresar').forEach((boton) => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            contenedorSubCategorias.classList.remove('active');
        });
    });

    btnCerrarMenu.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('#menu .active').forEach((elemento) => {
            elemento.classList.remove('active');
        });
        document.querySelector('body').style.overflow = 'visible';
    })
});