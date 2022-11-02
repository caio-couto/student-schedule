const Grade = require('./Grade');
const express = require('express');
const router = express.Router();

router.get('/grade', (req, res) =>
{
    Grade.findAll()
    .then((grades) =>
    {
        res.render('grade/index.ejs', {grades});
    })
    .catch((error) =>
    {
        res.render('/grade')
        console.log(error);
    })
});

router.post('/grade/create', (req, res) =>
{
    const {name, abbreviation, teacher, color} = req.body;
    if(name != undefined && abbreviation != undefined && teacher != undefined && color != undefined)
    {
        Grade.create(
            {
                name: name,
                abbreviation: abbreviation,
                teacher: teacher,
                color: color
            })
            .then(() =>
            {
                res.redirect('/grade/');
            })
            .catch((error) =>
            {
                res.redirect('/grade/');
                console.log(error);
            });
    }
    else
    {
        res.redirect('/');
    }
});

router.get('/grade/edit/:id', (req, res) =>
{
    const id = req.params.id;

    Grade.findOne({where: {id: id}})
    .then((grade) =>
    {
        res.render('grade/edit', {grade});
    })
    .catch((error) =>
    {
        res.redirect('/grade/');
        console.log(error);
    });
});

router.post('/grade/update', (req, res) =>
{
    const {id, name, abbreviation, teacher, color} = req.body;
    if(id != undefined && name != undefined && abbreviation != undefined && teacher != undefined && color != undefined)
    {
        Grade.update(
            {
                name: name,
                abbreviation: abbreviation,
                teacher: teacher,
                color: color
            },
            {
                where: {id: id}
            })
            .then(() =>
            {
                res.redirect('/grade/');
            })
            .catch((error) =>
            {
                res.redirect('/grade/');
                console.log(error);
            });
    }
    else
    {
        res.redirect('/grade/');
    }
});

router.post('/grade/delete', (req, res) =>
{
    const id = req.body.id;

    Grade.destroy({where: {id: id}})
    .then(() =>
    {
        res.redirect('/grade/')
    })
    .catch((error) =>
    {
        res.redirect('/grade/')
        console.log(error);
    });
});

module.exports = router;
