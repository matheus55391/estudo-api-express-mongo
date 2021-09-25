require('dotenv').config()
require('module-alias/register')

const http = require('http')
const config = require('@config')
const app = require('@app')


const server = http.createServer(app)

const port = config.app.port

server.listen(port, ()=>{
    console.log(`
    ---------------------------------------
    -                                     -  
    -    O servidor foi inicializado!!    -
    -                                     -
    -    http://localhost:${port}         -
    -                                     -
    ---------------------------------------
    `)
})
