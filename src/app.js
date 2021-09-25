const express = require("express")
const morgan = require('morgan')
const app = express()
app.use(morgan('dev'))

const routes = require('./routes')

app.use('/', routes)

module.exports = app
