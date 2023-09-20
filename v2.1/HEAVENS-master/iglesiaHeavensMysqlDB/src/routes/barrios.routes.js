import {Router} from "express";
import { methodsHTTP as barriosController } from "../controllers/barrios.controllers.js";
const router = Router();

router.get("/", barriosController.getBarrios);
router.post("/", barriosController.addBarrios);
router.get("/:id", barriosController.getBarrio);
router.delete("/:id", barriosController.deleteBarrio);
router.put("/:id", barriosController.updateBarrio);

export default router;