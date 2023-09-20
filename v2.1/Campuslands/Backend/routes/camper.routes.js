const {Router} = require('express');
const { getCamper, postCamper } = require('../controllers/camper.controller');
const router = Router();


router.get("/", getCamper)
router.post("/", postCamper)

module.exports = router;