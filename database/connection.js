const Sequelize = require('sequelize')

const sequelize = new Sequelize("aquas-app", "root", "root", { host: "localhost", dialect: "mysql", operatorsAliases: false })

module.exports = sequelize;
global.sequelize = sequelize;