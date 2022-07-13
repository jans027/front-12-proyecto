
/* Función que obtiene un valor aleatorio de una matriz */
export const valor_aleatorio = (data, contenedor, template) => {
    const template1 = document.querySelector('#template1');


    let aleatorio = data[Math.floor(Math.random() * data.length)];
    let aleatorio2 = data[Math.floor(Math.random() * data.length)];

    let resultados = [aleatorio, aleatorio2]

    resultados.forEach(element => {
        const{
            nombrePropietario, imagen, sexoMascota, razaMascota, colorMascota,nombreMascota, id
            } = element;

        template1.innerHTML += `

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
    const clone = document.importNode(template, true)
    contenedor.appendChild( clone )
}
