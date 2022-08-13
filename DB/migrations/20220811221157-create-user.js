'use strict';

const { UserSchema, User_Table}= require('./../Models/user');

module.exports = {
  async up (queryInterface) {
        await queryInterface.createTable(User_Table, UserSchema);
  },

  async down (queryInterface) {
   await queryInterface.dropTable(User_Table);
  }
};
