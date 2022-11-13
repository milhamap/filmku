const { v4: uuidv4 } = require('uuid');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('genres', [
      {
        random: uuidv4(),
        name: 'Action',
      },
      {
        random: uuidv4(),
        name: 'Adventure',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {});
  }
};
