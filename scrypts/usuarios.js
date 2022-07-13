import { postUsuario } from "../helpers/crud.js";



const formulario = document.getElementById('formularioReguistro');


formulario.addEventListener('submit', e => {
    e.preventDefault();

    const nombreMascota = document.getElementById('nombreMascota').value;
    const razaMascota = document.getElementById('razaMascota').value;
    const sexoMascota = document.getElementById('sexoMascota').value;
    const colorMascota = document.getElementById('colorMascota').value;
    const nombrePropietario = document.getElementById('nombrePropietario').value;
    const contrasena = document.getElementById('contrasena').value;
    const contacto = document.getElementById('telMovil').value;
    const precio = document.getElementById('precioMascota').value;
    const informacion = document.getElementById('info').value;
    const email = document.getElementById('email').value;
    const imagen = "https://loremflickr.com/350/350/cat";
    const idUsuario = (new Date()).getTime();//id random


    const usuario = {
        razaMascota,
        nombreMascota,
        sexoMascota,
        nombrePropietario,
        contrasena,
        colorMascota,
        informacion,
        contacto,
        precio,
        email,
        imagen,
        idUsuario
    }
    postUsuario(usuario);
    formulario.reset();
});














