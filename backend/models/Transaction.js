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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id'
            }
        },
        def_room_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'default_rooms',
                key: 'id'
            }
        },
        equity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'success', 'failed'),
            allowNull: false,
            defaultValue: 'pending'
        },
        booking_date: {
            type: DataTypes.DATE,
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
        tableName: 'transactions',
    });
    Transaction.associate = (models) => {
        // associations can be defined here
        Transaction.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        });
        Transaction.belongsTo(models.Default_Room, {
            foreignKey: 'def_room_id',
            as: 'default_room',
        });
        Transaction.hasOne(models.DetailTransaction, {
            foreignKey: 'transaction_id',
            as: 'detail_transactions',
        });
    };
    return Transaction;
}