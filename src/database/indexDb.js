const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const internacao = require('../api/models/internacaoModels.js');
const guiaexame = require('../api/models/guiaexameModels.js');

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');

} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

internacao.init(conexao);
guiaexame.init(conexao);

module.exports = conexao;
