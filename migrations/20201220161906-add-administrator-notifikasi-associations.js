'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'notifikasi', // name of Source model
            'id_administrator', // name of the key we're adding 
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'administrator', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'administrator', // name of Source model
            'id_admiistrator' // key we want to remove
        );
    }
};