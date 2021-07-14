const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
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

userSchema.pre("save", async function () {
  let salt = await bcrypt.genSalt(10)
  let hash = await bcrypt.hash(this.password, salt)
  this.password = hash
})

const User = mongoose.model("user", userSchema)
module.exports = User
