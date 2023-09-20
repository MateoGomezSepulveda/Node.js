require('dotenv').config();

const Server = require('../Backend/models/server.js')

const server = new Server();

server.listen();