const express = require('express');
const cors = require('cors');
const {DBConnection} = require('../database/config.js')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.paths = {
            CamperPath: "/api/campers"
        }

        this.middlewares();
        this.routes();
        this.connectDB();
    }

    async connectDB(){
        await DBConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.paths.CamperPath, require('../routes/camper.routes.js'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor Conentado en el puerto ${this.port}`);
        })
    }

}

module.exports = Server;