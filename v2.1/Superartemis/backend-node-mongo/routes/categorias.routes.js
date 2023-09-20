import express from "express";

const categoriasRouter = express.Router();

import { actualizarCategoria, agregarCategoria, borrarCategoria, obtenerCategorias } from "../controllers/categoria.controllers.js";

categoriasRouter.get("/all", obtenerCategorias);
categoriasRouter.post("/add", agregarCategoria);
categoriasRouter.delete("/del/:id", borrarCategoria);
categoriasRouter.patch("/upd/:id", actualizarCategoria);

export default categoriasRouter;