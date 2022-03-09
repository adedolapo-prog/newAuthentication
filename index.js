const express = require("express")
const app = express()
const route = require("./routes/index")
const connectDB = require("./connection/connectDB")
const { middleware } = require("./middleware/index")
//parsing input
middleware(app)

//creating db connection
connectDB(app)

function errorHandler(err, req, res, next) {
  if (err) {
    console.log("sorry, there was an error")
  }
}

//declaring the route
route(app)

app.use(errorHandler)

app.get('/', (req, res) => {
  res.send('Working fine')
})
