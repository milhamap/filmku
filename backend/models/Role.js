'use strict';
const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
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
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'roles',
    });
    Role.associate = (models) => {
        // associations can be defined here
        Role.hasOne(models.User, {
            foreignKey: 'role_id',
            as: 'users'
        });
    };
    return Role;
}