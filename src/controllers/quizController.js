var quizModel = require("../models/quizModel");

function listar(req, res) {
    quizModel.listar().then(function (resultado) {
        // ex: precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var fkUsuario = req.body.fkUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        quizModel.cadastrar(nome, fkUsuario, pontuacao).then(function (resposta) {
            res.status(200).send("Carro criado com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    listar,
    cadastrar
}