import {Router} from "express";
import { methodsHTTP as departamentosController } from "../controllers/departamentos.controllers.js";
const router = Router();

router.get("/", departamentosController.getDepartamentos);
router.post("/", departamentosController.addDepartamentos);


export default router;