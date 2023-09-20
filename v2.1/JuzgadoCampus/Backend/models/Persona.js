const {Schema, model} = require('mongoose');

const PersonaSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es requerido']
    },
    tipoIdentificacion: {
        type:String,
        required: [true, 'El tipo de identificacion es requerida']
    },
    NroIdentificacion: {
        type:String,
        required: [true, 'El numero de identificacion es requerido'],
        unique: true
    },
    emial:{
        type:String,
        required: [true, 'El email es requerido'],
        unique:true
    },
    password:{
        type:String,
        required: [true, 'El password es requerido']
    },
    estado: {
        type:String,
        default: 'LIBRE',
        enum: ['ARRESTADO','LIBRE']
    },
    imagen: {
        type:String
    }
})

module.exports = ('Persona', PersonaSchema);