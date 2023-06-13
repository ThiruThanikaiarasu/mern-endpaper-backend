require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const mongoose = require('mongoose')
const musicRouter = require('./routers/musicRouter')

app.use(express.json())
app.use('./uploads', express.static('uploads'))

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", (error)=> console.log(error.message))
db.once("open", ()=> console.log("Connection Established"))

app.get('/',(request,response)=>{
    response.send("Working")
})

app.use('/api/v1/music',musicRouter)

app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`))