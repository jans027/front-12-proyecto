import { postFavoritos } from "../helpers/crudFavoritos.js";
import { favoritos } from "./mostraFavorito.js";
import { mostrarDetalles } from "./mostrarDetalles.js";


const template =  document.getElementById('template3');


export const targetButton = (target, data) => {


    if (target.classList.contains('fa-heart')) {

        localStorage.setItem('id', target.id);
        const id = localStorage.getItem('id');
        
        const mascota = data.filter( (element) => element.id === parseInt(id));


        if(mascota.length !== 0){
            mascota.forEach(element => {
                const{
                    nombrePropietario, imagen, sexoMascota, razaMascota, colorMascota, nombreMascota, id,
                    informacion, contacto, precio, idUsuario
                    } = element;
                    console.log(element)

                    const elementFavorito  = {
                        razaMascota,
                        nombreMascota,
                        sexoMascota,
                        nombrePropietario,
                        colorMascota,
                        informacion,
                        contacto,
                        precio,
                        idUsuario,
                        imagen
                    }
                    postFavoritos(elementFavorito)
                });
                
        }

        // window.location.href = '../pages/detalles.html'
    } if (target.classList.contains('seleccion')) {
        localStorage.setItem('id', target.id);
        mostrarDetalles(target, data, template, contenidoDetalles)
        



    }if (target.classList.contains('fa-heart-circle-plus')) {
        localStorage.setItem('id', target.id);
        favoritos(data, target)



    }if (target.classList.contains('fa-cart-shopping')) {
        localStorage.setItem('id', target.id);
        
        


    }
}























