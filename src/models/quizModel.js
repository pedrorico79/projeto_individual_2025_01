var database = require("../database/config")

function listar() {
    var instrucao = `SELECT * FROM ;`; // inserir instrucao aqui
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(fkUsuario, pontuacao) {
    var instrucao = `
        INSERT INTO quiz (fkusuario,pontuacao) VALUES ('${fkUsuario}','${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};