const {Router} = require('express');
const { getPersona, postPersona, deletePersona, putPersona, patchPersona } = require('../controllers/persona.controller');

const router = Router();

router.get("/", getPersona)
router.post("/", postPersona)
router.delete("/", deletePersona)
router.put("/", putPersona)
router.patch("/", patchPersona)


module.exports = router;