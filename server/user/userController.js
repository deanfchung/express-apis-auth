const User = require('./userModel')
const userController = {}
const bcrypt = require('bcrypt')
const { newToken } = require('../utils/auth')

userController.newUser = (req, res, next) => {
   const { username, password } = req.body
   const salt = parseInt(process.env.SALT)
   bcrypt.hash(password, salt, async (err, hash) => {
      if (err) return next({ log: 'ERROR: couldnt hash password', message: { err } })
      try {
         const user = await User.create({ username, password: hash })
         res.locals.token = newToken(user)
         return next()
      } catch (e) {
         return next({ log: 'ERROR: couldnt save user in db', message: { err: e } })
      }
   })
}

userController.login = async (req, res, next) => {
   const { username, password } = req.body
   try {
      const user = await User.findOne({ username })
      const match = await bcrypt.compare(password, user.password)
      if (match) {
         res.locals.token = newToken(user)
         return next()
      }
   } catch (err) {
      return next({ log: 'ERROR: couldnt verify user', message: { err } })
   }
}
module.exports = userController
