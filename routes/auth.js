const express = require("express")
const router = express.Router()
const UserController = require("../controllers/userController")

router.get("/", (req, res) => {
  res.send("Hello There")
})

router.post("/register", UserController.createUser)

module.exports = router
