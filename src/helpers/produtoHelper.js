const Produto = require("../models/Produto.js")

exports.ObterProdutos = async () =>{ return await Produto.find({}) }
  
exports.CadastrarProduto = async (data) =>{

    const produto = new Produto({
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        vendedorId: data.vendedorId 

    })
    
    await produto.save()
    
    return produto
}

exports.ObterProdutosPeloNome = async (produto_nome) =>{

    produto_nome = '.*' + produto_nome + '.*'
    
    return await Produto.find({nome: {$regex: produto_nome, $options: 'i'}})
}

exports.DesativarProdutoPeloId = async (produto_id) =>{
    

    return await Produto.findOneAndUpdate({_id: produto_id},{$set: {situacao: '0'}})
}