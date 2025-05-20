var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    // ex:função a ser chamada quando acessar /quiz/cadastrar
    quizController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // ex função a ser chamada quando acessar /quiz/listar
    quizController.listar(req, res);
});

module.exports = router;