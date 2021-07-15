const express = require("express")
const router = express.Router()
const UserController = require("../controllers/userController")
const verify = require("./verifyToken")

router.get("/posts", verify, UserController.posts)

module.exports = router
