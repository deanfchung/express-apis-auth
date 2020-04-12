const User = require('../models/userModel')
const authController = {}

authController.newUser = async (req, res, next) => {
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

authController.login = async (req, res, next) => {
   console.log('userController hit')
   const { username, password } = req.body
   try {
      const response = await User.findOne({ username, password })
      console.log('response', response)
      if (response.password === password) {
         res.locals.id = res.locals.token = response._id
         return next()
      }
      return res.status(401).json({ err: 'Invalid credentials' })
   } catch (err) {
      return next({ log: 'ERROR verifying user in db', message: { err } })
   }
}
module.exports = authController
