const { v4: uuidv4 } = require('uuid');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
        random: uuidv4(),
        name: 'Admin',
      },
      {
        random: uuidv4(),
        name: 'Saler',
      },
      {
        random: uuidv4(),
        name: 'Customer',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('roles', null, {});
    
  }
};
