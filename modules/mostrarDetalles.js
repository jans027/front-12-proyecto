



export const mostrarDetalles = (target, data, template, contenedor) => {
    
    const mascota = data.find((element) => element.id === parseInt(target.id));

    if (mascota.length !== 0) {
        document.getElementById("sectionRecomendados").style.display = "none";
        document.getElementById("section1-3").style.display = "none";
        document.getElementById("section1-2").style.display = "none";

            const {
                precio,
                informacion,
                nombrePropietario,
                imagen,
                sexoMascota,
                razaMascota,
                colorMascota,
                nombreMascota,
                id
            } = mascota;
            document.getElementById('contenidoDetalles').innerHTML += `
                    <a >< Volver</a>
                <div class="infoRecommended">
                    <a class="corazon"><i id="${id}" class="fa-solid fa-heart"></i></a>
                </div>
                <div class="detalleRecommended">
                    <div class="imgRecommended">
                        <div class="imgRecommended1">
                            <img id="imgDetalle" src="${imagen}" alt="">
                        </div>
                        
                    </div>
                    
                    <div class="detalles1">
                        <h2 id="nombreMascota">${nombreMascota}</h2>
                        <div id="sexoMascota">${sexoMascota}</div>
                        <div id="razaMascota">${razaMascota}</div>
                        <div id="colorMascota">${colorMascota}</div>
                    </div>
                </div>
                <section class="section3-2">
                    <div class="nombreMascota1">
                        <h3>Information about <span id="nombreMascota">${nombreMascota}</span></h3>
                    </div>
                    <div class="CaracterizticasMascota">
                        <span>
                            <i class="fa-solid fa-face-grin-stars"></i>
                            <p>Active</p>
                        </span>
                        <span>
                            <i class="fa-solid fa-eye"></i>
                            <p>curious</p>
                        </span>
                        <span>
                            <i class="fa-solid fa-paw"></i>
                            <p>Make Friends</p>
                        </span>
                    </div>
                </section>
                <section class="section3-4">
                    <h4>Behavorial Characterists</h4>
                    <div class="caracterizticas1">
                        <span class="caracterizticas1-1">
                            <i class="fa-solid fa-scissors"></i>
                            <p>Neutered</p>
                        </span>
                        <span class="caracterizticas1-1">
                            <i class="fa-solid fa-syringe"></i>
                            <p>Vaccinated</p>
                        </span>
                    </div>
                    <div class="caracterizticas2">
                        <h4>Info</h4>
                        <p>
                            ${informacion}
                        </p>
                    </div>
                    <div class="caracterizticas3">
                        <a href="" class="mensaje1">
                            <i class="fa-solid fa-phone"></i>
                        </a>
                        <a href=""><span>${precio}</span> - Adopt</a>
                    </div>
                    `
    }
        // const clone = document.importNode(template, true);

        // contenedor.appendChild(clone);

}

















