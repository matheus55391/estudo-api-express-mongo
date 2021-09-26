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