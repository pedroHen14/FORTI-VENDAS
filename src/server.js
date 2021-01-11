//importando a aplicação do express
const app = require("./app");

//porta do servidor
const PORT = 3333;

//subindo o servidor
app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
