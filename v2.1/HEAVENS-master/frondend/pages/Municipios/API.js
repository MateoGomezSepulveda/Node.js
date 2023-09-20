const urlGetMuni = "http://localhost:5002/api/municipios";

export const getMunicipio = async () =>{
    try {
        const municipio = await fetch(`${urlGetMuni}`);
        const result = municipio.json();
        return result;    
    } catch (error) {
        console.log(error);
    }
}