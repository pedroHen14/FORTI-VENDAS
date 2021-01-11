
//importando config do DB
const dbConfig = require("../config/database");

//importando os models
const Pedido = require("../models/Pedido");
const { Sequelize } = require("sequelize");

//conectando ao database
const conexao = new Sequelize(dbConfig);

//inicia os models 
Pedido.init(conexao);

Pedido.associate(conexao.models);