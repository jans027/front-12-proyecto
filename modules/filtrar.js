

export const filtrar = (data, contenedor, template) =>{
    const template2 = document.querySelector('#template2');
    const texto = formularioBuscar.value.toLowerCase();
    
    document.getElementById("sectionRecomendados").style.display = "none";
    document.getElementById("section1-3").style.display = "none";
    
    
    // recorro la base de datos y busco coincidencias
    const mascota = data.filter( (element) => element.razaMascota.toLowerCase() === texto);
    
    if(mascota.length !== 0){//si encuentro coincidencias ejecuto este codigo
        

        mascota.forEach(element => {
            const{
                nombrePropietario, imagen, sexoMascota, razaMascota, colorMascota, nombreMascota, id
                } = element;
                
                template2.innerHTML += `
                <section class="cardRecommended">
                        <div class="infoRecommended">
                            <div class="info1">
                                <span><i class="fa-solid fa-user-tie"></i></span>
                            <div>
                                <h5>${nombrePropietario}</h5>
                                <p>pet star shop</p>
                            </div>
                            </div>
                            
                            <a><i id="${id}" class="fa-solid fa-heart"></i></a>
                        </div>
                        <div class="detalleRecommended">
                            <div class="imgRecommended">
                                <div class="contenedorImgd">
                                    <img class="seleccion" id="${id}" src="${imagen}" alt="${nombreMascota}">
                                </div>
                            </div>
                            <div class="detalles1">
                                <div>${sexoMascota}</div>
                                <div>${razaMascota}</div>
                                <div>${colorMascota}</div>
                            </div>
                        </div>
                    </section>
                `
            });
            
            const clone = document.importNode(template, true);
            
            contenedor.appendChild( clone );

        
    }else{//no encuentro coincidencias ejecuto esta alerta
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lo sentimos no encontramos nada!',
        })
    }
}

