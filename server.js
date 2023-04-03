//import express module
const express = require("express")
let bodyparser = require('body-parser')
let cors = require('cors')
//import url
let url = require('./url')
//import mongoose
const mongoose = require("mongoose")
//create app instance
const app = express()
//Set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//create port
let port = 8080
//////////////////////////////////////////
//connect to mongodb
mongoose.connect(url).then(() => {
    console.log('Connection succees')
}, () => {
    console.log('Connection Failed')
})
//////////////////////////////////////////
//====================================//
//import routes
const productRoutes = require('./routes/productRoutes')

//use routes
app.use("/", productRoutes)
//====================================//
app.listen(port, () => {
    console.log('Server listening port no :- ', port)
})
