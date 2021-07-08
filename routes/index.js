const express = require("express")
const authRoute = require("./auth")

module.exports = app => {
  app.use("/api/v1/user", authRoute)
}
