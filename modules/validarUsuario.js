











export const filtrarUsuario = (data, contrasenaLogin) => {

    let emailLogin = localStorage.getItem("email");


    if (data.find((element) =>
        element.email == emailLogin
        && element.contrasena == contrasenaLogin
    )) {
        window.location.href = "../pages/pagina1.html";
    }else {//no encuentro coincidencias ejecuto esta alerta
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lo Sentimos No Encontramos El Usuario!',
        })
    }


}
