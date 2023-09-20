const Persona = require('../models/Persona.js');

const getPersona = (req, res)=>{

    res.json({
        "message": "get Api"
    })
}

const postPersona = (req, res)=>{
    const body = req.body
    const persona = new Persona(body);
    res.json({
        "message": "post Api",
        persona
    })
}

const deletePersona = (req, res)=>{
    
    res.json({
        "message": "delete Api"
    })
}

const putPersona = (req, res)=>{
    
    res.json({
        "message": "put Api"
    })
}

const patchPersona = (req, res)=>{
    
    res.json({
        "message": "patch Api"
    })
}

module.exports = {
    getPersona,
    postPersona,
    deletePersona,
    putPersona,
    patchPersona
}