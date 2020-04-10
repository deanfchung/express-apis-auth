const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = 3000

if (process.env.NODE_ENV === 'production') {
   app.use('/', express.static(path.join(__dirname, '../build')))
   app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../build/index.html'))
   })
}

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

app.listen(port, () => {
   console.log(`Server listening on port: ${PORT}`)
})

module.exports = app
