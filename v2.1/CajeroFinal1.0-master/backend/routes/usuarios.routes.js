import { Router } from "express";
import { postUsuario,getUsuarios } from "../controllers/usuarios.controllers.js";
import validateDocuments from '../middlewares/validate.documents.js'
import incrementarContador from "../helpers/validation.cuenta.js"
import { check } from "express-validator";
import {existeUsuario,validarSaldo} from '../helpers/db.validations.js'
const router = Router();

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('pin', 'El pin debe contener minimo 4 caracteres').isLength({min :4}),
    check('cedula', 'La cedula es obligatorio').not().isEmpty(),
    check('cedula').custom(existeUsuario),
    check('saldo').custom(validarSaldo),
    incrementarContador,
    validateDocuments],
    postUsuario)
router.get('/',getUsuarios)

export default router