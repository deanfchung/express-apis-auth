const jwt = require('jsonwebtoken')

const newToken = (user) => {
   return jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXP,
   })
}

const verifyToken = (token) => {
   return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
         if (err) return reject(err)
         resolve(payload)
      })
   })
}

module.exports = { newToken, verifyToken }
