'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {
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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        film_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'films',
                key: 'id'
            }
        },
        rate:{
            type: DataTypes.FLOAT,
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
        tableName: 'ratings',
    });
    Rating.associate = function(models) {
        // associations can be defined here
        Rating.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'users'
        });
        Rating.belongsTo(models.Film, {
            foreignKey: 'film_id',
            as: 'films'
        });
    }
    return Rating;
}