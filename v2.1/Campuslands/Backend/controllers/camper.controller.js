
const getCamper = (req, res)=>{
    res.json({
        "message": "get Api"
    })
}

const postCamper = (req, res)=>{
    res.json({
        "message": "post Api"
    })
}

    

module.exports = {
    getCamper,
    postCamper
}