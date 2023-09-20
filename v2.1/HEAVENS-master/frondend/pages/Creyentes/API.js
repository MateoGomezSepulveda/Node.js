const urlGetCreyente = "http://localhost:5002/api/creyentes";

export const getCreyente = async () =>{
    try {
        const creyente = await fetch(`${urlGetCreyente}`);
        const result = creyente.json();
        return result;    
    } catch (error) {
        console.log(error);
    }
}