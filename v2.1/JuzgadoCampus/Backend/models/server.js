const express = require('express');
const cors = require('cors');
const { DBconnection } = require('../database/config.js');


class Server {
    constructor(){
        this.app = express();

        this.port = process.env.PORT

        this.personaPath = "/api/persona"

        this.middlewares();

        this.routes();
        
        this.ConnectDB();
    }

    async ConnectDB(){
        DBconnection();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.personaPath, require("../routes/persona.routes.js"))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`El puerto es ${this.port}`);
        })
    }
}

module.exports = Server;