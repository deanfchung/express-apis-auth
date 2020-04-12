const User = require('../models/userModel')
const authController = {}
const bcrypt = require('bcrypt')

authController.newUser = (req, res, next) => {
   const { username, password } = req.body
   const salt = parseInt(process.env.SALT)
   bcrypt.hash(password, salt, async (err, hash) => {
      if (err) return next({ log: 'ERROR: couldnt hash password', message: { err } })
      try {
         const response = await User.create({ username, password: hash })
         res.locals.id = response._id
         return next()
      } catch (e) {
         return next({ log: 'ERROR: couldnt save user in db', message: { err: e } })
      }
   })
}

authController.login = async (req, res, next) => {
   const { username, password } = req.body
   try {
      const response = await User.findOne({ username })
      console.log('response', response)
      const match = await bcrypt.compare(password, response.password)
      if (match) {
         res.locals.id = response._id
         return next()
      }
   } catch (err) {
      return next({ log: 'ERROR: couldnt verify user', message: { err } })
   }
}
module.exports = authController
