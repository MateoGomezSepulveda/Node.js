import { response } from "express";
import { Usuario } from "../models/Usuarios.js";
import bcryptjs from 'bcryptjs';

const postUsuario = async (req, res = response) => {
    try {
        const { nombre, pin, saldo,cedula} = req.body;
        const salt = bcryptjs.genSaltSync();
        const usuario = new Usuario({
            nombre,
            numeroCuenta: req.numeroCuenta,
            pin: bcryptjs.hashSync(pin, salt),
            saldo,
            cedula
        });
     
        await usuario.save();

        res.json({
            msg: "Registro exitoso",
            usuario
        });

    } 
     catch (error) {
        console.error(error)
        res.status(500).json({ msg: error.message });
    }
    
    }
    const getUsuarios= async(req,res=response)=>{
        const{hasta,desde}= req.query;
        const query = {estado:true}
        const [total,usuario]= await Promise.all([
            Usuario.countDocuments(query),
            Usuario.find(query)
                .skip(Number(desde))
                .limit(Number(hasta))
            ])
            res.json({
                total,usuario
            })
    }

export {
    postUsuario,
    getUsuarios
}
