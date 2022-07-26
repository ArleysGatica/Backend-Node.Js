const { Pool } = require('pg');
const { config } = require('../Env/Config')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const PollConexion = new Pool({ connectionString: URI });

module.exports = PollConexion;