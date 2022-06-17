const UserService = require("../../domain/user/services/UserService")


class UserController {

    handle(req, res, next) {
        const{body}= req
        UserService.createUser(body)
        res.send({name:req.body.name,
             email:req.body.email, 
             confirmemail:req.body.confirmemail, 
             cpf:req.body.cpf,
             celular:req.body.celular,
             data:req.body.data,
             emailsms:req.body.emailsms,
            whats:req.body.whats});
    }

}

module.exports = new UserController();