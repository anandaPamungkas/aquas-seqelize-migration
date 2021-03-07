'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('limit_aktuator', [{
                jenis: 'timeout_pintu_pakan',
                limit: 3,
            },
            {
                jenis: 'limit_cahaya_growlight',
                limit: 6906,
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('limit_aktuator', null, {});
    }
};