const audioModel = require('../models/musicModel')

const getAllAudio = async (request,response)=>{
    const audio = await audioModel.find()
    response.status(201).json(audio)
}

const addAAudio = async (request,response)=>{
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
}

module.exports = {
    addAAudio,
    getAllAudio
}