'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define('Actor', {
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
        name: {
            type: DataTypes.STRING(50),
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
        tableName: 'actors',
    });
    Actor.associate = function(models) {
        // associations can be defined here
        Actor.belongsTo(models.Film, {
            foreignKey: 'film_id',
            as: 'films'
        });
    }
    return Actor;
}