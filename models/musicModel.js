const mongoose = require('mongoose')

const musicSchema = mongoose.Schema(
    {

        title : {
            type : String,
            required : true,
            unique : true
        },

        artist : {
            type : String,
            required : true
        },

        audioSource : {
            type : String,
            required : true
        }
    },
    {
        collections : 'audios'
    }
)

module.exports = mongoose.model('audios', musicSchema)