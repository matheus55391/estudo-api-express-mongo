
const router = require('express').Router()

const TesteController = require('@controller/testeController')
const ApiController = require('@controller/apiController')
const produtoController = require('@controller/produtoController')

router.get('/', ApiController.HelloWorld)
router.get('/teste', TesteController.GetTeste)
router.post('/cadastrar', produtoController.PostCadastroProduto)

module.exports = router