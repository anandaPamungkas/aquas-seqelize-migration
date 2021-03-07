const { Sequelize, INTEGER } = require('sequelize')
const sequelize = require('sequelize')
const jadwal_pakan = require('./jadwal_pakan')

module.exports = (sequelize, DataTypes) => {
    jadwal_pakan = sequelize.define("jadwal_pakan", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        jenis: {
            type: Sequelize.STRING(30),
            allowNull: false,
        },
        subject: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        tanggal: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        waktu: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        deskripsi: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        id_administrator: {
            type: Sequelize.STRING(15),
            allowNull: false,
        },


    })

    jadwal_pakan.associate = models => {
        jadwal_pakan.belongsTo(models.id_administrator);
    }

    return jadwal_pakan
}