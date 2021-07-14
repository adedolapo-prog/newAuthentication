const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
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

  /**
   * @param {*} body
   * @returns login User
   */
  static async loginUser(body) {
    const { error, isValid } = await userValidator.login(body)
    if (!isValid) {
      throw error
    }

    //finds user according to email provided
    const foundUser = await User.findOne({ email: body.email })
    if (!foundUser) {
      throw "email or password incorrect"
    }

    //password check using bcrypt compare
    const check = await bcrypt.compare(body.password, foundUser.password)
    if (!check) {
      throw "email or password incorrect"
    }

    //only gets here if email and password checks successful then returns name and email
    const { name, email } = foundUser
    return { name, email }
  }
}
