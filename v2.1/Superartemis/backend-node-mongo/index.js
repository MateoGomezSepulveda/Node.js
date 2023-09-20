import express from "express";
import dotenv from "dotenv";
import conectarDB from "./Config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";
import clientesRouter from "./routes/cliente.routes.js";
import empleadoRouter from "./routes/empleado.routes.js";

const app = express();
dotenv.config();

app.use(express.json());
const PORT = process.env.PORT;

conectarDB();
app.use("/categorias", categoriasRouter);
app.use("/clientes", clientesRouter);
app.use("/empleados", empleadoRouter);

app.listen(PORT, () =>{
    console.log(`Super Server web listenning on port ${PORT}`);
})