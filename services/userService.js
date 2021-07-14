const User = require("../models/userModel")
const userValidator = require("../validation/userValidation")
module.exports = class UserService {
  /**
   * @param {*} body
   * @returns new User
   */
  static async createUser(body) {
    const { error, isValid } = await userValidator.newUser(body)
    if (!isValid) {
      throw error
    }
    try {
      const newUser = await new User(body)
      await newUser.save()
      const { name, email } = newUser
      return { name, email }
    } catch (err) {
      if (err.errors) {
        let errArr = {}
        let errors = Object.values(err.errors)

        for (let i = 0; i < errors.length; i++) {
          errArr.msg = errors[i].properties.message
        }
        throw errArr
      } else {
        throw "email already exists"
      }
    }
  }
}
