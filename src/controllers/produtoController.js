const ProdutoHelper = require('../helpers/produtoHelper')

exports.PostCadastroProduto = async (req, res, next) =>{

    let produto = await ProdutoHelper.CadastrarProduto(req.body)
    res.json(produto)
    return
}

exports.GetObterProdutos = async (req, res, next) =>{

    let produtos = await ProdutoHelper.ObterProdutos()
    res.json(produtos)
    return
}

exports.GetObterProdutosPeloNome = async (req, res, next) =>{
    let nome = req.params.nome
    if(nome){
        let produtos = await ProdutoHelper.ObterProdutosPeloNome(nome) 
        if(produtos.length)
            res.json(produtos) 
            return       
    }   
    res.status(404).json({error: new Error("Produto não encontrado")})
    return
}

exports.PatchDesativarProdutoPeloId = async (req, res, next) =>{
    let produtoId = req.params.id
    if(produtoId){
        let result = await ProdutoHelper.DesativarProdutoPeloId(produtoId)
        if(result.length){
            res.json(result)
        }
    }
    res.status(404).json({error: new Error("Produto não encontrado")})
    return
}