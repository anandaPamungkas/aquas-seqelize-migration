'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("administrator", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            nama: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            foto: {
                type: Sequelize.STRING(500),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(1000),
                allowNull: false,
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("administrator")
    }
};