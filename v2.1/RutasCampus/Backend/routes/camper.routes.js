const {Router} = require('express');
const { getCamper, postCamper, deleteCamper, putCamper, patchCamper } = require('../controllers/camper.controller');

const router = Router();

router.get("/", getCamper)
router.post("/", postCamper)
router.delete("/", deleteCamper)
router.put("/", putCamper)
router.patch("/", patchCamper)

module.exports = router;
