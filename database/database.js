const sequelize = require('sequelize');
const connection = new sequelize('schedule', 'root', 'Cavalcante12345.',
{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;