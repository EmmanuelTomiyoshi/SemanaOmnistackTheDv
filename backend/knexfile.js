// Update with your config settings.

module.exports = {

  development: {           /* da máquina */
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite' /* IMPORTANTE PRO DataBase*/
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true, /*IMPORTANTE*/
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {   /* quando é jogado para os clientes */
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
