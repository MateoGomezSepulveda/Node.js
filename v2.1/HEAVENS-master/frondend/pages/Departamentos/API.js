const urlGetDep = "http://localhost:5002/api/departamentos";

export const getDepartamento = async () =>{
    try {
        const departamento = await fetch(`${urlGetDep}`);
        const result = departamento.json();
        return result;    
    } catch (error) {
        console.log(error);
    }
}
