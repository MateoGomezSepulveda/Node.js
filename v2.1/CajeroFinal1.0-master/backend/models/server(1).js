import express from 'express';
import cors from 'cors';
import {dBconnection} from '../database/config.js'

class Server{
    constructor(){
        this.app= express();
        this.port=process.env.PORT;
        this.middlewares();
        this.connetionDb();
        //this.routes()
        this.paths={
            cajerospath: '/api/cajeros',
            movimientospath: '/api/movimientos',
            usuariospath: '/api/usuarios',
            operacionespath: '/api/operaciones',
        }
    }
    async connetionDb (){
        await dBconnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server is runnig on port ${this.port}`);
        })
    }
}
export default Server;