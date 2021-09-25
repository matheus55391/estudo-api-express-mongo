require('dotenv').config()
require('module-alias/register')

const config = require('@config')
const app = require('@app')

const mongoose = require('mongoose')

const http = require('http')
const server = http.createServer(app)



mongoose
    .connect(config.db.uri, { useNewUrlParser: true })
    .then(() => {
        const port = config.app.port        
        server.listen(port, ()=>{
            console.log(`Servidor inicializado ->  http://localhost:${port}`)
        })        
    })
