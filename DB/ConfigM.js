const { config } = require('./../Env/Config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
    developmente: {
        dialect: 'postgres',
        URL: URI,
    },
    production: {
        dialect: 'postgres',
        URL: URI,
    }
}