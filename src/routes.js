
const router = require('express').Router()

const TesteController = require('@controllers/testeController')
const ApiController = require('@controllers/apiController')
const produtoController = require('@controllers/produtoController')

router.get('/', ApiController.HelloWorld)
router.get('/teste', TesteController.GetTeste)
router.post('/cadastrar', produtoController.PostCadastroProduto)

module.exports = router