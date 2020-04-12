const User = require('../models/userModel')
const userController = {}

userController.newUser = async (req, res, next) => {
   const { username, password } = req.body
   const user = {
      username,
      password,
   }
   try {
      const response = await User.create(user)
      res.locals.id = response._id
      return next()
   } catch (err) {
      return next({ log: 'ERROR: couldnt insert user into db', message: { err } })
   }
}

module.exports = userController
