const mongoose = require('mongoose');

const DBConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB EN LINEA');
    } catch (error) {
        console.log(error);
        throw new Error('DB NO PUEDE INICIALIZAR');
    }
}

module.exports = {
    DBConnection
}