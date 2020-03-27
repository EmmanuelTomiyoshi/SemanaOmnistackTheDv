const knex = require('knex'); 
const configuration = require('../../knexfile'); /*../ voltar na pasta scr e na raiz, 
para o knex file */

const connection = knex(configuration.development);

module.exports = connection;