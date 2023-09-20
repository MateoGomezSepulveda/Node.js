const urlGetBarrio= "http://localhost:5002/api/barrios";

export const getBarrio = async () =>{
    try {
        const barrio = await fetch(`${urlGetBarrio}`);
        const result = barrio.json();
        return result;    
    } catch (error) {
        console.log(error);
    }
}

export const getIdBarrio = async () =>{
    try {
        const barrio = await fetch (`${urlGetBarrio}/${id}`);
        const result = barrio.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const insertBarrio = async (getIdBarrio) =>{
    try {
        await fetch(urlGetBarrio,{
            method:'POST',
            body:JSON.stringify(getIdBarrio),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "barrios.html";
    } catch (error) {
        console.log(error);
    }
}

export const inputBarrio = async (BarrioUp) =>{
    try {
        await fetch(`${urlGetBarrio}/${id}`,{
            method:'PUT',
            body:JSON.stringify(BarrioUp),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "barrios.html";
    } catch (error) {
        console.log(error);
    }
}

export const deleteBarrio = async (id) =>{
    try {
        await fetch(`${urlGetBarrio}/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "barrios.html";
    } catch (error) {
        console.log(error);
    }
}

