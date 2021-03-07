'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('status_aktuator', [{
          id: 1,
          jenis: 'servo_auto',
          status: 'manual',
        },
        {
          id: 2,
          jenis: 'pump_manual',
          status: 'off',
        }, {
          id: 3,
          jenis: 'grow_light_auto',
          status: 'manual',
        }, {
          id: 4,
          jenis: 'grow_light_manual',
          status: 'off',
        }
    ], {});
},

down: async(queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('status_aktuator', null, {});
}
};
