const UserService = require("../services/userService")
module.exports = class UserController {
  static async createUser(req, res) {
    try {
      const { name, email, password } = req.body
      const newUser = await UserService.createUser({ name, email, password })
      console.log(newUser)
      return res
        .status(200)
        .json({ success: true, error: "nil", data: newUser })
    } catch (err) {
        console.log(err)
      return res.status(400).json({ success: false, error: err })
    }
  }
}
