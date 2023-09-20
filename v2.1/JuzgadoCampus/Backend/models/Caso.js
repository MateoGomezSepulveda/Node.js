const {Schema, model} = require('mongoose');

const CasosSchema = Schema({
    nombreCaso:{
        type:String,
        required: [true, 'El nombre es requerido']
    },
    
})

module.exports = ('Caso', CasosSchema);