const { UserSchema, User } = require("./user")

function SetModels(sequelize) {
    User.init(UserSchema, User.config(sequelize))
}

module.exports = SetModels;