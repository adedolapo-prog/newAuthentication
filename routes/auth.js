const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello There")
})

router.post("/register", (req, res) => {
  res.send("register")
})

module.exports = router
