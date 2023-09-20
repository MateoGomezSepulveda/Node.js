const express = require('express');
const cors = require('cors');
const {DBConnection} = require('../database/config.js');

class Server {
    constructor(){
        this.app = express();
        this.camperPatch = "/api/camper"
        this.port = process.env.PORT
        // routes
        this.routes();
        // middlewares
        this.middlewares();
        // Conectar a base de datos MONGODB
        this.connectDB();
    }
    
    async connectDB(){
        DBConnection();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.camperPatch, require('../routes/camper.routes.js'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`El puerto es : ${this.port}`);
        })
    }
}

module.exports = Server;