//importando o express
const express = require("express");

//importando funções que serão execultadas pelas rotas
const pedidosController = require("./controller/pedidos");
const app = require("./app");

//instanciando router do express
const routes = express.Router();

//configuração da rota GET - para listar os pedidos
routes.get("/pedidos", pedidosController.listarPedidos);

//configuração da rota POST - para adicionar os pedidos
routes.post("/pedidos", pedidosController.adicionarPedido);

module.exports = routes;