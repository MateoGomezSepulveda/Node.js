const mongoose = require('mongoose');

const DBConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Conectado a la DB');
    } catch (error) {
        console.log(error);
        throw new Error('No se a podido conectar  a la DB')
    }
}

module.exports = {
    DBConnection
}