
import { filtrar } from "../modules/filtrar.js";
import { getData } from "../modules/getData.js";
import { valor_aleatorio } from "../modules/recommended.js";
import { targetButton } from "../modules/target.js";




const url = "http://localhost:3000";

const template2 = document.querySelector('#template2');
const contenido = document.getElementById('content');
const mostrarBuscar = document.querySelector('#sectionbuscar')
const contenidoDetalles = document.getElementById('contenidoDetalles')

// ..................recomendados............................
const clickBoton = document.querySelector('.boton1');
const recomendados = document.querySelector('#sectionRecomendados');
const template1 = document.querySelector('#template1');

document.addEventListener('DOMContentLoaded', async () => {
    // e.preventDefault();
    try {
        const data = await getData(url + "/mascotas");
        valor_aleatorio(data, recomendados, template1.content)

    } catch (error) {
        console.log(error)
    }
});

// .........................................................

// ..................buscador................................

const botonBuscar = document.getElementById('botonBuscar');


botonBuscar.addEventListener('click', async () => {

    try {
        const data = await getData(url + "/mascotas");
        filtrar(data, mostrarBuscar, template2.content)
        const formularioBuscar = document.querySelector('#formularioBuscar').value = "";


    } catch (error) {
        console.log(error)
    }
});

// .........................................................

// .................reconocer botones.......................


document.addEventListener('click', async ({ target }) => {


    try {
        const data = await getData(url + "/mascotas");
        targetButton(target, data, contenido, contenidoDetalles)

    } catch (error) {
        console.log(error)
    }
});


// .........................................................
document.addEventListener('click', async ({ target }) => {


    try {
        const dataFavoritos = await getData(url + "/favoritos");
        targetButton(target, dataFavoritos)
        // favoritos(data, target)

    } catch (error) {
        console.log(error)
    }
});



// .........................................................
