const { Sequelize, INTEGER } = require('sequelize')
const sequelize = require('sequelize')

module.exports = sequelize.define("data_ph", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    data: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    waktu: {
        type: Sequelize.DATE,
        allowNull: false,
    },
})