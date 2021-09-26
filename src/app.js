const config = require('@config')
const express = require("express")
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(config.db.uri, { useNewUrlParser: true })

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))

const routes = require('./routes')


app.use('/api', routes)

module.exports = app
