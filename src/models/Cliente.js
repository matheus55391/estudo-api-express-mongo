const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * Cliente:
 * 
 * Id: Number
 * login: String
 * senha: String
 * nivel: Number
 * 
 */


const ClienteModel = new Schema({
    login: {type: String, unique: true},
    senha: String,
}, { versionKey: false })

module.exports = mongoose.model('Cliente', ClienteModel)