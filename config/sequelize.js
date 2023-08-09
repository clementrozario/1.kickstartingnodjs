const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'clement', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
