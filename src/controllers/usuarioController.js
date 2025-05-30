var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

// ??
function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].id,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            sobrenome: resultadoAutenticar[0].sobrenome
                            // senha: resultadoAutenticar[0].senha,
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var instrumento = req.body.instrumentoServer;
    var naipe = req.body.naipeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    /*var fkEmpresa = req.body.idEmpresaVincularServer;*/

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (instrumento == undefined) {
        res.status(400).send("Seu instrumento está undefined!");
    } else if (naipe == undefined) {
        res.status(400).send("Seu naipe está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, instrumento, naipe, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function exibirGrafico1(req, res) {
    usuarioModel.exibirGrafico1()
        .then(function (resposta) {
            if (resposta.length > 0) {
                res.status(200).json(resposta);
            } else {
                res.status(204).send("nenhum resultado encontrado");
            }
        })

        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });

}

function exibirGrafico2(req, res) {
    usuarioModel.exibirGrafico2()
        .then(function (resposta) {
            if (resposta.length > 0) {
                res.status(200).json(resposta);
            } else {
                res.status(204).send("nenhum resultado encontrado");
            }
        })

        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });

}

function kpiUsuarios(req, res) {
    usuarioModel.kpiUsuarios()
        .then(function (resposta) {
            if (resposta.length > 0) {
                res.status(200).json(resposta);
            } else {
                res.status(204).send("nenhum resultado encontrado");
            }
        })
}

module.exports = {
    autenticar,
    cadastrar,
    exibirGrafico1,
    exibirGrafico2,
    kpiUsuarios
}