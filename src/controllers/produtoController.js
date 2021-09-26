const ProdutoHelper = require('../helpers/produtoHelper')

exports.PostCadastroProduto = async (req, res, next) =>{

    let produto = await ProdutoHelper.CadastrarProduto(req.body)
    res.json(produto)
}

exports.GetObterProdutos = async (req, res, next) =>{

    let produtos = await ProdutoHelper.ObterProdutos()
    res.json(produtos)
}