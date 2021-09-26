require('dotenv').config()
require('module-alias/register')
const http = require('http')
const config = require('@config')
const app = require('@app')
const port = config.app.port    

const server = http.createServer(app)

server.listen(port, ()=>{
    console.log(`Servidor inicializado ->  http://localhost:${port}`)
})
