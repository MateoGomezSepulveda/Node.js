const Camper = require('../models/Camper.js');


const getCamper = (req, res)=>{
    res.json({
        "mesagge": "get API"
    })
}

const postCamper = async (req, res)=>{
    const body = req.body;
    const camper = new Camper(body);
    await camper.save();
    res.json({
        "mesagge": "post API",
        camper
    })
}
const deleteCamper = (req, res)=>{
    res.json({
        "mesagge": "delete API"
    })
}

const putCamper = (req, res)=>{
    res.json({
        "mesagge": "put API"
    })
}

const patchCamper = (req, res)=>{
    res.json({
        "mesagge": "patch API"
    })
}

module.exports = {
    getCamper,
    postCamper,
    deleteCamper,
    putCamper,
    patchCamper
}