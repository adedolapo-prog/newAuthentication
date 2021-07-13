const express = require("express")
const app = express()
const route = require("./routes/index")
const connectDB = require("./connection/connectDB")

//parsing input
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//creating db connection
connectDB(app)

//declaring the route
route(app)
