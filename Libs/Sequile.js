const { Sequelize } = require('sequelize');

const { config } = require('./../Env/Config');
const SetModels = require('./../Models/indexM')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect:'postgres',
    logging: true,
});

SetModels(sequelize);

sequelize.sync()

module.exports = sequelize;