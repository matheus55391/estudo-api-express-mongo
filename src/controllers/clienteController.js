const ClienteHelper = require('../helpers/clienteHelper')

exports.PostLogin = async (req, res, next) =>{
    let cliente = await ClienteHelper.ObterCliente(req.body)
    res.json(cliente)
    return
}

exports.PostCadastroCliente = async (req, res, next) =>{

    let cliente = await ClienteHelper.CadastrarCliente(req.body)
    
    if(cliente.error)
        return res.status(500).json(cliente)

    res.status(200).json(cliente)
    return
}
