const express = require("express")
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

const routes = require('./routes')
const { use } = require("./routes")

app.use('/api', routes)

module.exports = app
