'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('showtimes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      random: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      film_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'films',
          key: 'id'
        }
      },
      showtimes: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('showtimes');
  }
};
