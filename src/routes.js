
const router = require('express').Router()

const TesteController = require('@controllers/testeController')
const ApiController = require('@controllers/apiController')
const produtoController = require('@controllers/produtoController')

router.get('/', ApiController.HelloWorld)
router.get('/teste', TesteController.GetTeste)
router.get('/produto', produtoController.GetObterProdutos)

router.post('/produto/cadastrar', produtoController.PostCadastroProduto)


module.exports = router