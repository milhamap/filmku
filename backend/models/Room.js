'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
        tableName: 'rooms',
    });
    Room.associate = function(models) {
        // associations can be defined here
        Room.hasMany(models.Transaction, {
            foreignKey: 'room_id',
            as: 'transactions'
        });
        Room.hasMany(models.Default_Room, {
            foreignKey: 'room_id',
            as: 'default_rooms'
        })
        Room.hasMany(models.Default_Chair, {
            foreignKey: 'room_id',
            as: 'default_chairs'
        })
    }
    return Room;
}