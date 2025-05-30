var quizModel = require("../models/quizModel");

function listarIndividual(req, res) {
    let id = req.params.id;

    quizModel.listarIndividual(id).then(function (resultado) {

        res.status(200).send(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })

}


function listarGeral(req, res) {
    quizModel.listarGeral().then(function (resultado) {

        res.status(200).send(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })

}

function cadastrar(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;

    if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Seu pontuacao está undefined!");
    } else {

        quizModel.cadastrar(fkUsuario, pontuacao).then(function (resposta) {
            res.status(200).send("Dados inseridos com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
    }
}

function listarMedia(req, res) {
    quizModel.listarMedia().then(function (resultado) {
        res.status(200).send(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar,
    listarIndividual,
    listarGeral,
    listarMedia
}