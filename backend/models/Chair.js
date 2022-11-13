'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Chair = sequelize.define('Chair', {
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
            type: DataTypes.STRING(4),
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
        tableName: 'chairs',
    });
    Chair.associate = function(models) {
        // associations can be defined here
        Chair.hasMany(models.Transaction, {
            foreignKey: 'chair_id',
            as: 'transactions'
        });
        Chair.hasMany(models.Default_Chair, {
            foreignKey: 'chair_id',
            as: 'default_Chairs'
        });
    }
    return Chair;
}