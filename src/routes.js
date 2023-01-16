const router = require('express').Router()

const TesteController   = require('@controllers/testeController')
const ApiController     = require('@controllers/apiController')
const produtoController = require('@controllers/produtoController')
const clienteController = require('@controllers/clienteController')

router.get('/', ApiController.HelloWorld)
router.get('/teste', TesteController.GetTeste)

// Produto
router.get('/produto/nome/:nome', produtoController.GetObterProdutosPeloNome)
router.get('/produto', produtoController.GetObterProdutos)
router.post('/produto', produtoController.PostCadastroProduto)
router.patch('/produto', produtoController.PatchDesativarProdutoPeloId)

// Cliente
router.post('auth/login', clienteController.PostLogin)
router.post('auth/cadastro', clienteController.PostCadastroCliente)

module.exports = router
