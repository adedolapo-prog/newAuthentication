const express = require("express")
const authRoute = require("./auth")
const postsRoute = require("./posts")

module.exports = app => {
  app.use("/api/v1/user", authRoute)
  app.use("/api/v1/user", postsRoute)
}
