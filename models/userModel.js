const mongoose = require("mongoose")
mongoose.set("useNewUrlParser", true)
mongoose.set("useFindAndModify", false)
mongoose.set("useCreateIndex", true)
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model("user", userSchema)
module.exports = User
