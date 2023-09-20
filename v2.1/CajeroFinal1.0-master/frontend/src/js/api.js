const urlUsuarios = "http://localhost:8004/api/usuarios/";
const login = "http://localhost:8004/api/login/";
const urlLogout = "http://localhost:8004/api/login/logout"
const urlsaldo = "http://localhost:8004/api/movimientos/saldo";
const urlMovimientos= 'http://localhost:8004/api/movimientos/op'
const urlGetMovimientos="http://localhost:8004/api/movimientos/"
  export const insertarUsuario = async (usuario) => {
    try {
      const response = await fetch(urlUsuarios, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const responseData = await response.json();
      if (!response.ok) {
        alert(responseData.errors);
        console.log(responseData);
    } else {
      alert(responseData.msg)
      window.location.href = "index.html";
    }
} catch (error) {
    console.log(error);
    alert(error.message); // Mostrar un alert en caso de error
}
};
export const loginUsuario = async (logear) => {
    try {
       const response = await fetch(login, {
        method: 'POST',
        body: JSON.stringify(logear),
        headers: {
          'Content-type': 'application/json' }
        })
        const responseData = await response.json();
      if (!response.ok) {
        console.log(responseData);
        alert(responseData.message);
    } else {
      alert('Inicio de sesion exitoso')
        window.location.href = "operaciones.html";
    }
      return responseData; 
  } catch (error) {
      alert(error)
  }
}
export const logout = async () => {
  try {
      const response = await fetch(urlLogout, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
      });
      if (response.ok) {
        window.addEventListener('unload', () => {
          document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      });
          window.location.href = 'login.html';
      } else {
          console.error('Error al cerrar sesión');
      }
      setTimeout(() => {
        window.location.reload();
    }, 1000)
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
}

};
//Movimientos
export const consultaSaldo = async (user) => {
  try {
    const response = await fetch(`${urlsaldo}/${user.usuario._id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el saldo:', error);
    return null;
  }
};
export const depositoSaldo = async (deposito, token)=>{
  try {
    const response=await fetch(urlMovimientos,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'x-api-token-jwt': token },
          body: JSON.stringify(deposito)
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Error al realizar el depósito');
      }
  } catch (error) {
    console.error('Error al realizar el depósito:', error);
    throw error;
  }
}
export const retiroEfectivo = async (retiro, token)=>{
  try {
    const response=await fetch(urlMovimientos,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'x-api-token-jwt': token },
          body: JSON.stringify(retiro)
      });
      if (response.ok) {
        console.log(retiro);
        const data = await response.json();
        setTimeout(() => {
          window.location.reload();
      }, 1000)
        return data;
      } else {
        throw new Error('Error al realizar el Retiroo');
      }
  } catch (error) {
    console.error('Error al realizar el Retiro:', error);
    throw error;
  }
}

export const getMovimientos= async(user)=>{
  try {
    const response = await fetch(`${urlGetMovimientos}/${user.usuario._id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los movimientos:', error);
    return null;
  }
};



