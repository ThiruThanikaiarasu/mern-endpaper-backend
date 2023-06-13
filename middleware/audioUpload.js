const multer = require('multer')

const audioStorage = multer.diskStorage({
    destination : function(request, file, callback){
        callback(null, './uploads/')
    },

    filename : function(request,file,callback){
        callback(null,Date.now()+ '_' + file.originalname)
    } 
})

const audioUpload = multer({
    storage : audioStorage,
    fileFilter : function(request,file,callback){
        if(file.mimetype == 'audio/mp3'){
            callback(null,true)
        }
        else{
            callback(null,true)
        }
    }
}) 


module.exports = audioUpload