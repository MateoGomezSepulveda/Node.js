import express from "express";

const clientesRouter = express.Router();

import { actualizarCliente, agregarCliente, borrarCliente, obtenerClientes } from "../controllers/cliente.controllers.js";


clientesRouter.get("/all", obtenerClientes);
clientesRouter.post("/add", agregarCliente );
clientesRouter.delete("/del/:id", borrarCliente);
clientesRouter.patch("/upd/:id", actualizarCliente );

export default clientesRouter;