import getConnection from "../db/database.js";

const getBarrios = async (req,res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idBarrio, nombreBarrio, idComuna FROM barrios");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addBarrios = async (req,res) =>{
    try {
        const {nombreBarrio,idComuna} = req.body;
        const Barrio = {nombreBarrio,idComuna};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO barrios SET ?", Barrio);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getBarrio = async (req,res) =>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT idBarrio, nombreBarrio, idComuna FROM barrios WHERE idBarrio = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteBarrio = async (req,res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM barrios WHERE idBarrio = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateBarrio = async (req,res) =>{
    try {
        const {id} = req.params;
        const {nombreBarrio,idComuna} = req.body;
        const Barrio = {nombreBarrio,idComuna};
        const connection = await getConnection();
        const result = await connection.query("UPDATE barrios SET ? WHERE idBarrio = ?",[Barrio, id]);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getBarrios,
    addBarrios,
    getBarrio,
    deleteBarrio,
    updateBarrio
}