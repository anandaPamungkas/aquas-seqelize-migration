'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("jadwal_aktuator", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            aktuator: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            jenis: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            waktu: {
                type: Sequelize.TIME,
                allowNull: false,
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("jadwal_aktuator")
    }
};