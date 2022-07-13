
const url = "  http://localhost:3000/favoritos";

export const postFavoritos = async usuario => {
    try{
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(usuario),
            headers:{
                "Content-Type":"application/json; charset=UTF-8"
            }
        }) 
    }catch(error){
        console.log(error)
    }
}

export const getDataFavoritos = async(url) => {
    try{
        const respuesta = await fetch(url);  // fetch
        const data = await respuesta.json()
        return data
    }catch(error){
        throw error
    }
}


























