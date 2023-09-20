import getConnection from "../db/database.js";

const getMunicipios = async (req,res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idMunicipio, nombreMunicipio, idDepartamento FROM municipios");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addMunicipios = async (req,res) =>{
    try {
        const {nombreMunicipio,idDepartamento} = req.body;
        const Municipios = {nombreMunicipio,idDepartamento};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO municipios SET ?", Municipios);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
   getMunicipios,
   addMunicipios
}