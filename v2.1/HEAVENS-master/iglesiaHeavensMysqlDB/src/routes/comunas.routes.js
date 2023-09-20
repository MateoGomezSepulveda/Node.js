import {Router} from "express";
import { methodsHTTP as comunasController } from "../controllers/comunas.controllers.js";
const router = Router();

router.get("/", comunasController.getComunas);
router.post("/", comunasController.addComunas);

export default router;