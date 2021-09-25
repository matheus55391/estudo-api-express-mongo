

exports.cadastrarProduto = async (data) =>{
    const Produto = require("../models/Produto")
    const produto = new Produto({
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        vendedorId: data.vendedorId 

    })
    
    await produto.save()
    
    return produto
}