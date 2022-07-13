import { getData } from "../modules/getData.js";
import { filtrarUsuario } from "../modules/validarUsuario.js";


const url = "http://localhost:3000";

const formulario = document.getElementById('formulariologin');
// const botonLogin = document.getElementById('botonLogin');


formulario.addEventListener('submit', async (e) => { 
    e.preventDefault();
    const valorEmail = document.getElementById("ususarioLogin").value;
    const contrasenaLogin = document.getElementById('contrasenaLogin').value;
    localStorage.setItem("email", valorEmail);


    try {
        const data = await getData(url + "/mascotas");
        filtrarUsuario(data, contrasenaLogin)

    } catch (error) {
        console.log(error)
    }

});






// ..........................................................