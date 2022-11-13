'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Default_Chair = sequelize.define('Default_Chair', {
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
        room_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'rooms',
                key: 'id'
            }
        },
        chair_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'chairs',
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
        tableName: 'default_chairs',
    });
    Default_Chair.associate = function(models) {
        // associations can be defined here
        Default_Chair.belongsTo(models.Room, {
            foreignKey: 'room_id',
            as: 'room'
        });
        Default_Chair.belongsTo(models.Chair, {
            foreignKey: 'chair_id',
            as: 'chair'
        });
    }
    return Default_Chair;
}