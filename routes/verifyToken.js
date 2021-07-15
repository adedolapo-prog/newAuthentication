const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../configs/config.json")

module.exports = function (req, res, next) {
  const token = req.header("auth-token")
  if (!token) {
    res.status(400).json({ success: false, data: "access denied" })
  }

  try {
    const verified = jwt.verify(token, SECRET_KEY)
    req.user = verified
    next()
  } catch (err) {
    res.status(400).json({ success: false, data: "invalid token" })
  }
}
