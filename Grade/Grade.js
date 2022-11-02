const sequelize = require('sequelize');
const connection = require('../database/database');
const Event = require('../Event/Event');

const Grade = connection.define('grades',
{
    name: 
    {
        type: sequelize.STRING(30),
        allowNull: false
    },
    teacher:
    {
        type: sequelize.STRING(30),
        allowNull: false
    },
    abbreviation:
    {
        type: sequelize.STRING(15),
        allowNull: false
    },
    color:
    {
        type: sequelize.STRING(12),
        allowNull: false
    }
});

module.exports = Grade;