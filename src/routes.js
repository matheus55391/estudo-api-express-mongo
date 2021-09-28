
const router = require('express').Router()

const TesteController   = require('@controllers/testeController')
const ApiController     = require('@controllers/apiController')
const produtoController = require('@controllers/produtoController')
const clienteController = require('@controllers/clienteController')

router.get('/', ApiController.HelloWorld)
router.get('/teste', TesteController.GetTeste)
router.get('/produto/', produtoController.GetObterProdutos)
router.get('/produto/p/:nome', produtoController.GetObterProdutosPeloNome)

router.post('/login', clienteController.PostLogin)
router.post('/produto/cadastrar', produtoController.PostCadastroProduto)
router.post('/cadastro', clienteController.PostCadastroCliente)

module.exports = router