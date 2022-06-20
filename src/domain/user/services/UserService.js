const User = require("../mocks/UserMock")
class UserService {
    createUser(body) {
        const { name, email, confirmemail, cpf, celular, data, emailsms, whats, pais, cidade, cep, endereco, numero } = body;

        //validação//
        if (name == "" || name.length < 3) {
            console.log("Digite um nome válido")
        }
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (email == "" || !emailRegex.test(email)) {
            console.log("Digite um email válido")
        }
        if (email !== confirmemail || confirmemail == "") {
            console.log("Email inválido")
        }

        function ValidadorCPF(Cpf) {
            var Soma;
            var Resto;
            var i;
            Soma = 0;
            if (Cpf == "00000000000") return false;
            if (Cpf == "11111111111") return false;
            if (Cpf == "22222222222") return false;
            if (Cpf == "33333333333") return false;
            if (Cpf == "44444444444") return false;
            if (Cpf == "55555555555") return false;
            if (Cpf == "66666666666") return false;
            if (Cpf == "77777777777") return false;
            if (Cpf == "88888888888") return false;
            if (Cpf == "99999999999") return false;
            for (i = 1; i <= 9; i++) Soma = Soma + parseInt(Cpf.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(Cpf.substring(9, 10))) return false;
            Soma = 0;
            for (i = 1; i <= 10; i++) Soma = Soma + parseInt(Cpf.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(Cpf.substring(10, 11))) return false;
            return true;
        }
        if (cpf == "" || cpf.length < 14 && !ValidadorCPF(cpf.replace(/[^0-9]/g, ''))) {
            console.log("CPF inválido")
        }
        if (celular == "" || celular.length < 11) {
            console.log("Digite um celular válido")
        }
        if (data == "" || data.length < 10) {
            console.log("Digite uma data válida")
        }
        if (emailsms == "" && whats == "") {
            console.log("Selecione pelo menos uma opção")
        }
        if (pais == "" || pais.length < 3) {
            console.log("Digite um pais válido")
        }
        if (cidade == "") {
            console.log("Digite uma cidade válida")
        }
        if (cep == "" || cep.length < 8 || cep.length > 8) {
            console.log("Digite um cep válido")
        }
        if (endereco == "") {
            console.log("Digite um endereço válido")
        }
        if (numero == "") {
            console.log("Digite um numero")
        }

    }

}

module.exports = new UserService();