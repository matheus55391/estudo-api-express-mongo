exports.GetTeste = (req, res, next) =>{
    res.status(200).json( {
        messagem: 'Controller de teste!'
    })
}



