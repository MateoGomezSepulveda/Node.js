const {Router} = require('express');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documentos.js');
const { validateJWT } = require('../middlewares/validate.JWT.js');
const { isAdminRole } = require('../middlewares/validate.Role.js');
const { postProducto, getProducto, getProductos, deleteProducto } = require('../controllers/productos.controllers.js');
const { findProductoById, findCategoryById } = require('../helpers/db.validators.js');
const { putCategorias } = require('../controllers/categoria.controller.js');

const router = Router();

router.get('/', getProductos)


router.get('/:id', [
    check('id', 'No es un id de Mongo valido').isMongoId(),
    check('id').custom(findProductoById),
    validateDocuments,
],getProducto)



router.post('/', [
    validateJWT,
    check('nombre','El Nombre es obligatorio').not().isEmpty(),
    check('categoria','No es un id de Mongoas').isMongoId(),
    check('categoria').custom(findCategoryById),
    validateDocuments
], postProducto);


router.put('/:id', [
    validateJWT,
    check('id').custom(findProductoById),
    validateDocuments,
],putCategorias)

router.delete('/:id', [
    validateJWT,
    isAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( findProductoById ),
    validateDocuments,
],deleteProducto);

module.exports = router;

