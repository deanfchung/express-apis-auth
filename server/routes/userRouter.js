const express = require('express')
const user = express.Router()
const userController = require('../controllers/userController')

user.post('/register', userController.newUser, (req, res) => {
   console.log('user successfuly created')
   res.status(200).json({ data: { id: res.locals.id, message: 'user successfully created' } })
})

module.exports = user
