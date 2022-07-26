const { Pool } = require('pg');

const PollConexion = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'nicho',
    password: 'nicho123',
    database: 'my_base'
});

module.exports = PollConexion;