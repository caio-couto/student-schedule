const express = require('express');
const app = express();
const connection = require('./database/database');
const sequelize = require('sequelize');
const Event = require('./Event/Event');
const Grade = require('./Grade/Grade');
const eventController = require('./Event/eventController');
const gradeController = require('./Grade/gradeController');

connection.authenticate()
.then(() =>
{
    console.log('conexão feita com suecesso');
})
.catch((error) =>
{
    console.log('não foi possível se conectar com o banco de dados ', error);
});

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use('/', gradeController);

app.use('/', eventController);

app.get('/', (req, res) =>
{
    Grade.findAll()
    .then((grades) =>
    {
        res.render('index.ejs', {grades});
    })
    .catch((error) =>
    {
        console.log(error);
    });
});

app.listen('3000', () =>
{
    console.log('servidor rodando na porta 3000');
});