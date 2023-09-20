import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
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

const Cliente = mongoose.model("clientes", clienteSchema);

export default Cliente;