var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    // ex:função a ser chamada quando acessar /quiz/cadastrar
    quizController.cadastrar(req, res);
});

router.get("/listarIndividual/:id", function (req, res) {
    // ex função a ser chamada quando acessar /quiz/listar
    quizController.listarIndividual(req, res);
});

router.get("/listarGeral", function (req, res) {
    // ex função a ser chamada quando acessar /quiz/listar
    quizController.listarGeral(req, res);
});

router.get("/listarMedia", function (req, res) {
    quizController.listarMedia(req, res);
});

module.exports = router;