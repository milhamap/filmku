'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Default_Room = sequelize.define('Default_Room', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        random: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        film_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'films',
                key: 'id'
            }
        },
        room_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'rooms',
              key: 'id'
            }
        },
        showtime_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'showtimes',
              key: 'id'
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        tableName: 'default_rooms',
    });
    Default_Room.associate = function(models) {
        // associations can be defined here
        Default_Room.belongsTo(models.Room, {
            foreignKey: 'room_id',
            as: 'room'
        });
        Default_Room.belongsTo(models.Showtime, {
            foreignKey: 'showtime_id',
            as: 'showtime'
        });
        Default_Room.belongsTo(models.Film, {
            foreignKey: 'film_id',
            as: 'film'
        });
    }
    return Default_Room;
}