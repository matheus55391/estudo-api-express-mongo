const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * Produto:
 * 
 * Id: int
 * Nome: String
 * Descricao: String
 * Preco: Number
 * VendedorId: int 
 * 
 */


const ProdutoModel = new Schema({
    nome: String,
    descricao: String,
    preco: Number,
    vendedorId: Number
}, { versionKey: false  })

module.exports = mongoose.model('Produto', ProdutoModel)
 