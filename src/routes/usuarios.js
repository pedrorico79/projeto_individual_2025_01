var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


// CRIEI
router.post("/exibirGrafico1", function (req, res) {
    usuarioController.exibirGrafico1(req, res);
})

router.post("/exibirGrafico2", function (req, res) {
    usuarioController.exibirGrafico2(req, res);
})

module.exports = router;