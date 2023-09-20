import express from "express";

const empleadoRouter = express.Router();

import { actualizarEmpleado, agregarEmpleado, borrarEmpleado, obtenerEmpleado } from "../controllers/empleados.controllers.js";


empleadoRouter.get("/all", obtenerEmpleado);
empleadoRouter.post("/add", agregarEmpleado);
empleadoRouter.delete("/del/:id", borrarEmpleado);
empleadoRouter.patch("/upd/:id", actualizarEmpleado);

export default empleadoRouter;