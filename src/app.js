const express = require("express")
const morgan = require('morgan')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))

const routes = require('./routes')
const { use } = require("./routes")

app.use('/api', routes)

module.exports = app
