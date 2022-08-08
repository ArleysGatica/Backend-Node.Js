const boom = require('@hapi/boom');
const Sequelize = require('../Libs/Sequile');
const postgresConexion = require('../Libs/postgres-Conexion');
const { models } = require('./../Libs/Sequile');

class UserService {
    constructor() {
    }

    async create(data) {
        const newUser = await models.users.create(data);
        return newUser;
    }

    async find() {
        const Cliente = await models.users.findAll();
        return Cliente;
    }

    async findOne(id) {
        const user = await models.users.findByPk(id);
        if (!user) {
           throw boom.notFound('USER notFound')
        }
        return user;
    }

    async update(id, changes) {
        const user = await this.findOne(id)
        const Rest = await user.update(changes);
        return Rest;
    }

    async delete(id) {
        const user = await this.findOne(id)
        await user.destroy();
        return { id };
    }
}

module.exports = UserService;
