const config = require('@config')
const express = require("express")
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

mongoose.connect(config.db.uri, { useNewUrlParser: true })

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', routes)

app.use((req, res, next) =>{
    const erro = new Error('Não encontrado')
    erro.status(404)
    next(erro)
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500)
    return res.json({
        erro:{
            message: error.message
        }
    })
})

module.exports = app
