'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("notifikasi", {
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
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("notifikasi")
    }
};