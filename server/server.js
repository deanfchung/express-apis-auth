const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

if (process.env.NODE_ENV === 'production') {
   app.use('/', express.static(path.join(__dirname, '../build')))
   app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../build/index.html'))
   })
}

//global error handler
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.status(500).send('Something broke!')
})

app.listen(port, () => console.log(`server listening on port ${port}!`)) //listens on port 3000 -> http://localhost:3000/
