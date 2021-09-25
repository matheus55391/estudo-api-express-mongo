
const router = require('express').Router()

const TesteController = require('@controller/testeController')
const ApiController = require('@controller/apiController')


router.get('/', ApiController.HelloWorld)
router.get('/teste/', TesteController.GetTeste)


module.exports = router