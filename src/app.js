//importa o framework express
const express = require("express");

//importando as rotas
const routes = require("./routes");

//importando o banco de dados
require("./database");

//criando a aplicação pelo express
const app = express();

app.use(express.json());

app.use(routes);

//exportando o express
module.exports = app;