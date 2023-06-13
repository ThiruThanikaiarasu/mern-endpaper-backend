const express = require('express')
const router = express.Router()
const audioModel = require('../models/musicModel')
const audioUpload = require('../middleware/audioUpload')

router.get('/', async (request,response)=>{
    const audio = await audioModel.find()
    response.status(201).json(audio)
})

router.post('/',audioUpload.single('audioSource') ,async (request,response)=>{
    const {title, artist} = request.body
    const audioSource = request.file ? request.file.path : null
    try{
        const newAudio = new audioModel({
            title,
            artist,
            audioSource
        })
        const audio = await newAudio.save()
        response.status(200).json(audio)
    }
    catch(error){
        response.status(500).json({message : error.message})
    }
})

router.get('/', (request,response)=>{

})

module.exports = router