const mongoose = require('mongoose');

const DBconnection = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('DB EN LINEA');
    } catch (error) {
        console.log(error);
        throw new Error('La DB no pudo ser conectada');
    }
}

module.exports = {
    DBconnection
}