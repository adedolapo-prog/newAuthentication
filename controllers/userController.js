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
      const { name, email, token } = await UserService.loginUser(req.body)
      res
        .status(200)
        .header("auth-token", token)
        .json({ success: true, error: "nil", data: { name, email } })

      res.end()
    } catch (err) {
      return res.status(400).json({ success: false, error: err })
    }
  }

  static async posts(req, res) {
    try {
      const posts = await UserService.posts()

      return res.status(200).json({ success: true, error: "nil", data: posts })
    } catch (err) {
      return res.status(400).json({ success: false, error: err })
    }
  }
}
