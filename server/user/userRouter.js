const { Router } = require('express')
const user = new Router()
const userController = require('./userController')

user.post('/login', userController.login, (req, res) => {
   res.status(200).json({
      token: res.locals.token,
      message: 'user verified',
   })
})

user.post('/register', userController.newUser, (req, res) => {
   res.status(200).json({
      token: res.locals.token,
      message: 'user successfully created',
   })
})

module.exports = user
