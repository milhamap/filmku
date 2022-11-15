'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Showtime = sequelize.define('Showtime', {
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
        showtimes: {
            type: DataTypes.TIME,
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
        tableName: 'showtimes',
    });
    Showtime.associate = function(models) {
        // associations can be defined here
        Showtime.hasMany(models.Default_Room, {
            foreignKey: 'showtime_id',
            as: 'default_rooms'
        })
        Showtime.belongsTo(models.Film, {
            foreignKey: 'film_id',
            as: 'films'
        });
    }
    return Showtime;
}