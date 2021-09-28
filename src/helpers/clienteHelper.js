const Cliente = require("../models/Cliente.js")

exports.CadastrarCliente = async (data)=>{
    try{
        const cliente = new Cliente({
            login: data.login,
            senha: data.senha,
        })    

        return await cliente.save() 

    } catch (err) {
        return {
            error:{ 
                    code: err.code,
                    message: err.message
                }
        }
    }
}

exports.ObterCliente = async (data)=>{
    const cliente = new Cliente({
        login: data.login,
        senha: data.senha,
    })

    return await Cliente.find({login: cliente.login, senha: cliente.senha})

}