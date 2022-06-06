class UserController {

    handle(req, res, next) {
        res.send({name:req.body.name,
             idade:req.body.idade, 
             email:req.body.email, 
             confirmemail:req.body.confirmemail, 
             cpf:req.body.cpf,
             celular:req.body.celular,
             data:req.body.data});
    }
    
    handle

}

module.exports = new UserController();