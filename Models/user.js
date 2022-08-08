const { Model, DataTypes, Sequelize } = require('sequelize');

const User_Table = 'users';

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    email: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
    },

    password: {
        allowNull: false,
        type: DataTypes.STRING
    },

    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'createdAt',
        defaultValue: Sequelize.NOW
    }
}

class User extends Model {
    static associate() {
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: User_Table,
            modelName: 'users',
            timestamp: false // default the camps
        }
    }
}

module.exports = { UserSchema, User_Table, User }