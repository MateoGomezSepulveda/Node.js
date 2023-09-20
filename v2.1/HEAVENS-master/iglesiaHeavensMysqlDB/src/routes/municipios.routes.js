import {Router} from "express";
import { methodsHTTP as municipiosController } from "../controllers/municipios.controllers.js";
const router = Router();

router.get("/", municipiosController.getMunicipios);
router.post("/", municipiosController.addMunicipios);

export default router;