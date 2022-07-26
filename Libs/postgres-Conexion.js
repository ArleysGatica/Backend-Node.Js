const { Client } = require('pg');

async function postgresConexion() {
    const ClienteCONEXION = new Client({
        host: 'localhost',
        port: 5432,
        user: 'nicho',
        password: 'nicho123',
        database: 'my_base'
    });
    
    await ClienteCONEXION.connect();
    return ClienteCONEXION;
}

module.exports = postgresConexion;