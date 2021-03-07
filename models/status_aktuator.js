const { Sequelize, INTEGER } = require('sequelize')
const sequelize = require('sequelize')

module.exports = sequelize.define("status_aktuator", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    jenis: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING(20),
        allowNull: false,
    },
})