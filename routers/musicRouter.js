const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("Music page")
})

module.exports = router