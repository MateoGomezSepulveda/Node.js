import getConnection from "../db/database.js";

const getComunas = async (req,res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idComuna, nombreColumna, idMunicipio FROM comunas");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addComunas = async (req,res) =>{
    try {
        const {nombreColumna,idMunicipio} = req.body;
        const Comunas = {nombreColumna,idMunicipio};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO comunas SET ?", Comunas);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getComunas,
    addComunas
}