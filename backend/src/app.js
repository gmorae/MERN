const express = require('express')
const app = express()
const cors = require('cors')

// Settings
// Port of server
app.set('port', process.env.PORT || 12345)

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.get('/api/users', (req, res) => res.send('users'))

module.exports = app

