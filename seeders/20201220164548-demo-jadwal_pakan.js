'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('jadwal_pakan', [{
                jenis: 'pagi',
                waktu: '08:00:00',
            },
            {
                jenis: 'siang',
                waktu: '12:00:00',
            }, {
                jenis: 'sore',
                waktu: '16:00:00',
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('jadwal_pakan', null, {});
    }
};