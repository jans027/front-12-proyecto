
const url = "  http://localhost:3000/mascotas";

export const postUsuario = async usuario => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
    } catch (error) {
        console.log(error)
    }
}















