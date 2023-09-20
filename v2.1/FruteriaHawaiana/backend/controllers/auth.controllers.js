const {response} = require('express');
const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate.JWT.js');

const login = async (req, res=response) =>{
    const {email, password} = req.body
    try {
        // Verificar si existe el email en la base de datos
        const usuario = await Usuario.findOne({email})

        if(!usuario){
            return res.status(400).json({
                msg: "El email no existe"
            });
        }

        // Verificar si el usuario esta activo
        if(!usuario.estado){
            return res.status(400).json({
                msg: "Estado inactivo"
            })
        }
        // Verificar el password es correcto y coincide con la llave
        const passwordValidate = bcryptjs.compareSync(password, usuario.password);
        if(!passwordValidate){
            return res.status(400).json({
                msg: "El password no es correcto"
            });
        }

        //Generacion para Validacion de JSON WEB TOKEN 
        const token = await generateJWT(usuario.id)

        res.json({
            usuario,
            token
        })
    } catch (error) {
        console.log(error);
        return res.json({
            msg: "Datos insuficinetes, contacte a servicio tecnico"
        });
    }
    
}

module.exports = {
    login
}