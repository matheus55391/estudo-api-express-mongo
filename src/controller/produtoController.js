let produtoModel = require('../helpers/cadastrarProduto')
produtomodel = produtoModel.cadastrarProduto
exports.PostCadastroProduto = async (req, res, next) =>{

    let produto = produtomodel(req.body)

    res.status(200).json(produto)
}
