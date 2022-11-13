'use strict';
const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        role_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'roles',
                key: 'id'
            }
        },
        refreshToken: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'users',
    });
    User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.Film, {
            foreignKey: 'user_id',
            as: 'films'
        });
        User.belongsTo(models.Role, {
            foreignKey: 'role_id',
            as: 'roles'
        });
        User.hasMany(models.Rating, {
            foreignKey: 'user_id',
            as: 'ratings'
        });
        User.hasMany(models.Transaction, {
            foreignKey: 'user_id',
            as: 'transactions'
        });
    };
    return User;
}