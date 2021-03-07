const { Sequelize, INTEGER } = require('sequelize')
const sequelize = require('sequelize')

module.exports = sequelize.define("administrator", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.toString(100),
        allowNull: false,
    },
    nama: {
        type: Sequelize.toString(100),
        allowNull: false,
    },
    foto: {
        type: Sequelize.toString(500),
        allowNull: false,
    },
    password: {
        type: Sequelize.toString(1000),
        allowNull: false,
    }
})