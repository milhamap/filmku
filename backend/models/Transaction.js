'use strict';
const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id'
            }
        },
        showtime_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'showtimes',
              key: 'id'
            }
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
        tableName: 'roles',
    });
    Transaction.associate = (models) => {
        // associations can be defined here
        Transaction.belongsTo(models.Film, {
            foreignKey: 'film_id',
            as: 'film',
        });
        Transaction.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        });
        Transaction.belongsTo(models.Showtime, {
            foreignKey: 'showtime_id',
            as: 'showtime',
        });
        Transaction.belongsTo(models.Room, {
            foreignKey: 'room_id',
            as: 'room',
        });
        Transaction.belongsTo(models.Chair, {
            foreignKey: 'chair_id',
            as: 'chair',
        });
    };
    return Transaction;
}