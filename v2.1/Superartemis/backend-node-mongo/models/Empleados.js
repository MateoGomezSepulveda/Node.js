import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema({
    celular: {
        type: String,
        required: true,
        trim: true
    },
    edad: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    }
    },
    {
        timestamps: true, 
    }
);

const Empleado = mongoose.model("empleados", empleadoSchema);

export default Empleado;