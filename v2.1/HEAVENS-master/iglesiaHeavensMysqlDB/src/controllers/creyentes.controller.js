import getConnection from "../db/database.js";

const getCreyentes = async (req,res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idCreyente, nombre, email, nroCelular, direccion, idBarrio FROM creyentes");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addCreyentes = async (req,res) =>{
    try {
        const {nombre,email,nroCelular,direccion,idBarrio} = req.body;
        const Creyente = {nombre,email,nroCelular,direccion,idBarrio};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO creyentes SET ?", Creyente);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getCreyentes,
    addCreyentes
}