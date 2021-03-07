'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("status_aktuator", {
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
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("status_aktuator")
    }
};