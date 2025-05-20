var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, sobrenome, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, sobrenome, instrumento, naipe, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, sobrenome, instrumento, naipe, email, senha) VALUES ('${nome}', '${sobrenome}', '${instrumento}', '${naipe}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// CRIEI
function exibirGrafico1() {
    console.log('buscando dados do BD grafico')

    var instrucaoSql = `select naipe, count(*) as quantidade from usuario group by naipe;`

    return database.executar(instrucaoSql);
}

function exibirGrafico2() {
    console.log('buscando dados do BD grafico')

    var instrucaoSql = `select instrumento, count(*) as quantidade from usuario group by instrumento;`

    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    exibirGrafico1,
    exibirGrafico2
};