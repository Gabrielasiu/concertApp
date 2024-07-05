const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Matchup extends Model { }

Matchup.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        artistA: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artistB: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        votesA: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        votesB: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imageA: {
            type: DataTypes.STRING,
        },
        imageB: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'matchup', //indica el nombre que le pusimos a la table
    }
);

module.exports = Matchup;
