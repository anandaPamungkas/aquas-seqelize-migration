const { Sequelize, INTEGER } = require('sequelize')
const sequelize = require('sequelize')

module.exports = sequelize.define("jadwal_pakan", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    jenis: {
        type: Sequelize.STRING(15),
        allowNull: false,
    },
    waktu: {
        type: Sequelize.TIME,
        allowNull: false,
    },
})