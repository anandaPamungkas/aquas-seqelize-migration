'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("limit_aktuator", {
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
            limit: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("limit_aktuator")
    }
};