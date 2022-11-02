const sequelize = require('sequelize');
const connection = require('../database/database');
const Grade = require('../Grade/Grade');

const Event = connection.define('events',
{
    description:
    {
        type: sequelize.STRING(100),
        allowNull: false
    },
    start:
    {
        type: sequelize.STRING(10),
        allowNull: false
    },
    end:
    {
        type: sequelize.STRING(10),
        allowNull: false
    },
    week:
    {
        type: sequelize.CHAR(4),
        allowNull: false
    }
})

Grade.hasMany(Event);
Event.belongsTo(Grade);

module.exports = Event;