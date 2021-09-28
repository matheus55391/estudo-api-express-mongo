const cli = require("nodemon/lib/cli")
const Cliente = require("../models/Cliente.js")

exports.CadastrarCliente = async (data)=>{

    const cliente = new Cliente({
        login: data.login,
        senha: data.senha,
    })

    await cliente.save((err, cliente)=>{
        if(err)
            return {message: err}
        return cliente
    })
    
    
}

exports.ObterCliente = async (data)=>{
    const cliente = new Cliente({
        login: data.login,
        senha: data.senha,
    })

    return await Cliente.find({login: cliente.login, senha: cliente.senha})

}