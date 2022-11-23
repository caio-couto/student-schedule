const sequelize = require('sequelize');
const dbPassword = 'password'
const connection = new sequelize('schedule', 'root', dbPassword,
{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;