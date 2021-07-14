const UserService = require("../services/userService")
module.exports = class UserController {
  static async createUser(req, res) {
    try {
      const { name, email, password } = req.body
      const newUser = await UserService.createUser({ name, email, password })
      return res
        .status(200)
        .json({ success: true, error: "nil", data: newUser })
    } catch (err) {
      return res.status(400).json({ success: false, error: err })
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body
      const loginUser = await UserService.loginUser({ email, password })
      return res
        .status(200)
        .json({ success: true, error: "nil", data: loginUser })
    } catch (err) {
      return res.status(400).json({ success: false, error: err })
    }
  }
}
