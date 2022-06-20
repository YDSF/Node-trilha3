const UserService = require("../../domain/user/services/UserService")

class AllUserController {

    handle(req, res, next) {
        const { body } = req
        UserService.createUser(body)
        res.send({
            name: req.body.name,
            idade: req.body.idade,
            email: req.body.email,
            confirmemail: req.body.confirmemail,
            cpf: req.body.cpf,
            celular: req.body.celular,
            data: req.body.data,
            emailsms: req.body.emailsms,
            whats: req.body.whats,
            pais: req.body.pais,
            cidade: req.body.cidade,
            cep: req.body.cep,
            endereco: req.body.endereco,
            numero: req.body.numero
        });
    }

}

module.exports = new AllUserController();