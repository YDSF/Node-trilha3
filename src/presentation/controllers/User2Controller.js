const UserService = require("../../domain/user/services/UserService")


class User2Controller {

    handle(req, res, next) {
        const { body } = req
        UserService.createUser(body)
        res.send({
            pais: req.body.pais,
            cidade: req.body.cidade,
            cep: req.body.cep,
            endereco: req.body.endereco,
            numero: req.body.numero
        });
    }

}

module.exports = new User2Controller();