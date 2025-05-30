var database = require("../database/config")



function listarIndividual(id) {
    var instrucao = `select pontuacao, count(*) as quantidade from quiz where fkusuario = '${id}' group by pontuacao order by pontuacao asc;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarGeral() {
    var instrucao = `select pontuacao, count(*) as quantidade from quiz group by pontuacao order by pontuacao asc;`
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

function listarMedia() {
    var instrucao = `select round(avg(pontuacao),1) as mediapontuacao from quiz;`;
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarIndividual,
    listarGeral,
    listarMedia
};