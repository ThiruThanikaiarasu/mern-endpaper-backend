const express = require('express')
const router = express.Router()
const audioModel = require('../models/musicModel')
const audioUpload = require('../middleware/audioUpload')
const {addAAudio, getAllAudio} = require('../controllers/musicContoller')

router.route('/').get(getAllAudio).post(audioUpload.single('audioSource'),addAAudio)


router.get('/', (request,response)=>{

})

module.exports = router