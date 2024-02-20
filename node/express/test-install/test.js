// Conectando ao Banco de dados

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {  
    console.log("Conectado com sucesso!")
}).catch((erro) => console.log("Falha ao conectar com banco de dados!"));