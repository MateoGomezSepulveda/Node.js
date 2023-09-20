import { Usuario } from "../models/Usuarios.js";
const existeUsuario= async(cedula)=>{
    try {
        const usuarioDB = await Usuario.findOne({ cedula });
    if ( usuarioDB ) {
        return Promise.reject(`La cedula ${cedula} ya se encuentra registrada`);;
    }
    } catch (error) {
        console.log(error);
    }
}
const validarSaldo = (value) => {
    if (value < 20000) {
        throw new Error('El saldo debe ser mayor a 20,000');
    }
    return true;
};

export{
    existeUsuario,
    validarSaldo,
}