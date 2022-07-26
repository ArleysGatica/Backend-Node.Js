const boom = require('@hapi/boom');
const PollConexion = require('../Libs/postgres-Conexion-Pool');

class CategoryService {

    constructor() {
        this.PollConexion = PollConexion;
        this.PollConexion.on('error', (err) => {
            console.error('Unexpected error on idle client', err)
        })
    }

    async create(data) {
        return data;
    }

    async find() {
        const Cliente = 'SELECT *FROM Categories'
        const query = await this.PollConexion.query(Cliente)
        return query.rows;
    }

    async findOne(id) {
        return { id };
    }

    async update(id, changes) {
        return {
            id,
            changes,
        };
    }

    async delete(id) {
        return { id };
    }

}

module.exports = CategoryService;