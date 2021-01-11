//importar models dos pedidos
const Pedido = require("../models/Pedido");
const { Op } = require("sequelize");

//exportando as funções que seram usadas para as rotas
module.exports = {
    //cria função que ira listar todos os pedidos que foram feitos
    async listarPedidos(req, res){
        const cliente = req.query.nome;

        try {
            if (!cliente) {
                const pedidos = await Pedido.findAll();

                res.send(pedidos);
            }
            else{
                const pedidos = await Pedido.findAll({
                    where: {
                        cliente: {[Op.like]: `%${cliente}%`}
                    }
                }, 
                {
                    attributes: ["id", "cliente", "produto"]
                })

                res.send(pedidos);
            }
        } catch (error) {
            console.log(error);
            
            res.status(500).send({error});
        }
    },
    async adicionarPedido(req, res){
        const {cliente, produto, quantidade} = req.body;

        try {
            pedidos = await Pedido.create({cliente, produto, quantidade});

            res.status(201).send({id: pedidos.id})
        } catch (error) {
            res.status(500).send({error})
        }
    }

}