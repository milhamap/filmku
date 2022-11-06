'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {
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
            type: DataTypes.INTEGER(5),
            allowNull: false,
        }
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