'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("data_suhu", {
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
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("data_suhu")
    }
};