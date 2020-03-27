/* responsável por criar a tabela */
exports.up = function(knex) { 
  return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary();
      table.string('name').notNullable(); /* notNullable significa obrigatório*/
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); /* '2' porque a uf é sempre 2*/
  })
};

/*deletar tabelas*/
exports.down = function(knex) {
    knex.schema.dropTable('ongs');
    
};
