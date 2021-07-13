const User = require("../models/userModel")
module.exports = class UserService {
  /**
   * @param {*} body
   * @returns new User
   */
  static async createUser(body) {
    try {
      const newUser = await new User(body)
      await newUser.save()
      return newUser
    } catch (err) {
      let errArr = []
      let errors = Object.values(err.errors)

      for (let i = 0; i < errors.length; i++) {
        errArr.push(errors[i].properties.message)
      }
      throw errArr
    }
  }
}
