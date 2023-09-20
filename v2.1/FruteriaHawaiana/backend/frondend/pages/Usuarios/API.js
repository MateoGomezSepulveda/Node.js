const urlGetUsuario = "http://localhost:8021/api/usuarios";
const login = "http://localhost:8021/api/auth/login";

export const getUsuarios = async () =>{
    try {
        const usuario = await fetch(`${urlGetUsuario}`);
        const result = await usuario.json();
        return result;    
    } catch (error) {
        console.log(error);
    }
}

export const logerUsuario = async (logear) =>{
    try {
        const response = await fetch(login, {
            method: 'POST',
            body: JSON.stringify(logear),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const responseData = await response.json();
        if(!response.ok) {
            console.log(responseData);
            alert(responseData.message);
        }else{
            alert('Inicio de sesion exitoso')
            window.location.href = "../Categorias/categorias.html";
        }
        return responseData;
    }catch (error){
        alert(error)
    }
}
