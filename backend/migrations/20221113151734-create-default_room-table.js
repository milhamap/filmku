'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('default_rooms', { 
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
      // room_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'rooms',
      //     key: 'id'
      //   }
      // },
      showtime_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'showtimes',
          key: 'id'
        }
      },
      def_chair_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'default_chairs',
            key: 'id'
        }
      },
      booking: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
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
    await queryInterface.dropTable('default_rooms');
  }
};
