const mongoose = require("mongoose")
const { DB_URI } = require("../configs/config.json")
const PORT = 3500

module.exports = async app => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("awesome, connected to DB")
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
