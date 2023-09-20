import {Router} from "express";
import { methodsHTTP as creyentesController } from "../controllers/creyentes.controller.js";
const router = Router();

router.get("/", creyentesController.getCreyentes);
router.post("/", creyentesController.addCreyentes);

export default router;