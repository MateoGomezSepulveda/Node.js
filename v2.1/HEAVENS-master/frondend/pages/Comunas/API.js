const urlGetComun = "http://localhost:5002/api/comunas";

export const getComuna = async () =>{
    try {
        const comuna = await fetch(`${urlGetComun}`);
        const result = comuna.json();
        return result;    
    } catch (error) {
        console.log(error);
    }
}