'use district';
const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const DetailTransaction = sequelize.define('DetailTransaction', {
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
        transaction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'transactions',
                key: 'id'
            }
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
        tableName: 'detail_transactions',
    });
    DetailTransaction.associate = function(models) {
        // associations can be defined here
        DetailTransaction.belongsTo(models.Transaction, {
            foreignKey: 'transaction_id',
            as: 'transactions'
        });
    }
    return DetailTransaction;
}