const {Schema, model} = require('mongoose');

const camperSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'el nombre es requerido']
    },
    tipoIdentificacion:{
        type:String,
        required: [true, 'el tipo de identificacion es requerido']
    },
    NroIdentificacion:{
        type:String,
        required:[true, 'el numero de identificacion es requerido'],
        unique: true
    },
    Email:{
      type:String,
      required: [true, 'Email es requerida'],
      unique: true  
    },
    passowrd:{
        type:String,
        required: [true, 'el password es requerido']
    },
    level:{
        type:String,
        required:[true, 'el nivel es requerido']
    },
    levelState:{
        type:String,
        required:[true, 'el level state es requerido']
    },
    estado:{
        type:Boolean,
        default:true
    },
    imagen:{
        type:String
    },
    rol:{
        type:String,
        required: true,
        default: 'CAMPER',
        enum: ['CAMPER','TRAINER','ADMIN']
    },
    promedio:{
        type:String
    }
})

module.exports = model('Camper', camperSchema);