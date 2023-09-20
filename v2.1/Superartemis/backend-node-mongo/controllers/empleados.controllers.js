import Empleado from "../models/Empleados.js";

const obtenerEmpleado = async (req,res) =>{

    const empleados = await Empleado.find();
    
    res.json(empleados);
}

const agregarEmpleado = async (req,res) =>{
    const empleado = new Empleado(req.body);

    try {
        const nuevaEmpleado = await empleado.save();
        res.json(nuevaEmpleado);   
    } catch (error) {
        console.log(error);
    }
    
}

const borrarEmpleado = async (req,res) =>{
    try {
        await Empleado.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Empleado no existe"})
    }
}

const actualizarEmpleado= async (req,res) =>{
    try {
        const empleado = await Empleado.findOne({_id: req.params.id})
        if (req.body.imagen){
            empleado.imagen = req.body.imagen;
        }

        if (req.body.Nombre){
            empleado.Nombre = req.body.Nombre
        }
        if (req.body.descripccion){
            empleado.descripccion = req.body.descripccion;
        }

        await empleado.save()
        res.send(Empleado)
    } catch (error) {
        res.status(404)
        res.send({error: "Empleado no existente"})
    }
}

export {obtenerEmpleado, agregarEmpleado, borrarEmpleado, actualizarEmpleado};