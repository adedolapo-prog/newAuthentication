const validator = require("validator")

module.exports = class Validator {
  /**
   * @desc check the registration inputs
   * @route api/v1/user/register
   */

  static async newUser(body) {
    let error = {}

    //check if string is empty
    if (
      validator.isEmpty(body["name"]) ||
      validator.isEmpty(body["email"]) ||
      validator.isEmpty(body["password"])
    ) {
      error.msg = "please fill in all missing fields"
    }

    if (
      validator.isBoolean(body.name) ||
      validator.isBoolean(body.email) ||
      validator.isBoolean(body.password)
    ) {
      error.msg = "input cannot be boolean"
    }

    if (!validator.isEmail(body.email)) {
      error.msg = "please enter a valid email"
    }

    if (!validator.isStrongPassword(body.password)) {
      error.msg = "password is not strong enough"
    }

    return {
      error,
      isValid: Object.keys(error).length == 0,
    }
  }

  static async login(body) {
    let error = {}

    if (!validator.isEmail(body.email)) {
      error.msg = "please enter a valid email"
    }

    if (
      validator.isEmpty(body["email"]) ||
      validator.isEmpty(body["password"])
    ) {
      error.msg = "please fill in all missing fields"
    }

    if (validator.isBoolean(body.email) || validator.isBoolean(body.password)) {
      error.msg = "input cannot be boolean"
    }

    return {
      error,
      isValid: Object.keys(error).length == 0,
    }
  }
}
