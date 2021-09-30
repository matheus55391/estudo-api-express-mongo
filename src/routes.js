const router = require('express').Router()

const TesteController   = require('@controllers/testeController')
const ApiController     = require('@controllers/apiController')
const produtoController = require('@controllers/produtoController')
const clienteController = require('@controllers/clienteController')

router.get('/', ApiController.HelloWorld)
router.get('/teste', TesteController.GetTeste)

// Produto
router.get('/produto/p/:nome', produtoController.GetObterProdutosPeloNome)
router.get('/produto/todos', produtoController.GetObterProdutos)
router.post('/produto/cadastrar', produtoController.PostCadastroProduto)
router.patch('/produto/desativar', produtoController.PatchDesativarProdutoPeloId)

// Cliente
router.post('/login', clienteController.PostLogin)
router.post('/cadastro', clienteController.PostCadastroCliente)

module.exports = router