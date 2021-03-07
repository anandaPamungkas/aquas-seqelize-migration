'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('jadwal_aktuator', [{
                aktuator: 'servo',
                jenis: 'pagi',
                waktu: '08:00:00',
            },
            {
                aktuator: 'servo',
                jenis: 'siang',
                waktu: '12:00:00',
            }, {
                aktuator: 'servo',
                jenis: 'sore',
                waktu: '16:00:00',
            }, {
                aktuator: 'growlight',
                jenis: 'mulai',
                waktu: '07:00:00',
            }, {
                aktuator: 'growlight',
                jenis: 'selesai',
                waktu: '18:00:00',
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('jadwal_aktuator', null, {});
    }
};