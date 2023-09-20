import getConnection from "../db/database.js";

const getDepartamentos = async (req,res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idDepartamento, nombreDepartamento FROM departamentos");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addDepartamentos = async (req,res) =>{
    try {
        const {nombreDepartamento} = req.body;
        const Departamentos = {nombreDepartamento};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO departamentos SET ?", Departamentos);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getDepartamentos,
    addDepartamentos
}