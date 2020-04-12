const express = require('express')
const auth = express.Router()
const authController = require('../controllers/authController')

auth.post('/login', authController.login, (req, res) => {
   res.status(200).json({
      data: { userId: res.locals.id, token: res.locals.token, message: 'user verified' },
   })
})

auth.post('/register', authController.newUser, (req, res) => {
   console.log('user successfuly created')
   res.status(200).json({ data: { id: res.locals.id, message: 'user successfully created' } })
})

module.exports = auth
