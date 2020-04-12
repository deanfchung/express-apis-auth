const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const connect = require('./utils/db')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = 3000

const userRouter = require('./user/userRouter')

if (process.env.NODE_ENV === 'production') {
   app.use('/', express.static(path.join(__dirname, '../build')))
   app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../build/index.html'))
   })
}

app.use('/auth', userRouter)

//uncaught route handler
app.get('*', (req, res) => {
   res.sendStatus(404)
})

//global error handler
app.use((err, req, res, next) => {
   const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
   }
   const errorObj = Object.assign(defaultErr, err)
   console.error(errorObj.log)
   res.status(errorObj.status).json(errorObj.message)
})

app.listen(PORT, async () => {
   try {
      await connect()
      console.log(`app listening on port ${PORT}`)
   } catch (e) {
      console.error(e)
   }
})

module.exports = app
