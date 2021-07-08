const express = require("express")
const app = express()
const route = require("./routes/index")
const connectDB = require("./connection/connectDB")

//creating db connection
connectDB(app)

//declaring the route
route(app)
