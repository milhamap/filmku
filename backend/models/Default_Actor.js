'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Default_Actor = sequelize.define('Default_Actor', {
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
        actor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'actors',
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
        tableName: 'default_actors',
    });
    Default_Actor.associate = function(models) {
        // associations can be defined here
        Default_Actor.belongsTo(models.Actor, {
            foreignKey: 'actor_id',
            as: 'actor'
        });
        Default_Actor.belongsTo(models.Film, {
            foreignKey: 'film_id',
            as: 'film'
        });
    }
    return Default_Actor;
}