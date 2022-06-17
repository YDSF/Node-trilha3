const User = require ("../mocks/UserMock")
class UserService{
    createUser(body){
        const {name, idade, email, confirmemail, cpf, celular, data, emailsms, whats, pais, cidade, cep, endereco, numero}= body;

        console.log ("Chegou aqui");
        


    }
}

module.exports = new UserService();