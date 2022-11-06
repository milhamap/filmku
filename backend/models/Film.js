'use strict';
const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define('Film', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Genres',
                key: 'id'
            }
        },
        rating: {
            type: DataTypes.INTEGER(5),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        showtimes: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        expire_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
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
        tableName: 'films',
    });
    Film.associate = (models) => {
        // associations can be defined here
        Film.belongsTo(models.Genre, {
            foreignKey: 'genre_id',
            as: 'genres'
        });
        Film.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'users'
        });
        Film.hasMany(models.Rating, {
            foreignKey: 'film_id',
            as: 'ratings'
        });
    };
    return Film;
}