const express = require("express")
module.exports.middleware = app => {
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
}
