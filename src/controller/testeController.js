exports.GetTeste = (req, res, next) =>{
    var url = req.param('url') || 1 
    res.status(200).send( {
        messagem: 'Controller de teste!'
    })
}



