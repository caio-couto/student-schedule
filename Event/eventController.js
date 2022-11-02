const Event = require('./Event');
const Grade = require('../Grade/Grade');
const express = require('express');
const router = express.Router();

router.get('/event/data', (req, res) =>
{
    Event.findAll(
    {
        include: [{model: Grade, required: true}]
    })
    .then((events) =>
    {
        eventsData = [];
        events.forEach((element) => 
        {
            function week(element)
            {
                var week 
    
                switch(element)
                {
                    case 'dom':
                        week = '06'
                    break
                    case 'seg':
                        week = '07'
                    break
                    case 'ter':
                        week = '08'
                    break
                    case 'qua':
                        week = '09'
                    break
                    case 'qui':
                        week = '10'
                        break
                    case 'sex':
                        week = '11'
                    break
                    case 'sab':
                        week = '12'
                    break
                }
    
                return week
            }
            function spliter(element)
            {
                let elementSplited;
                
                elementSplited = element.split(':');
    
                return elementSplited
            }
            eventsData.push(
            {
                id: element.id,
                title: element.grade.abbreviation,
                url: `/event/edit/${element.id}`, 
                start: `2020-09-${week(element.week)}T${spliter(element.start)[0]}:${spliter(element.start)[1]}`,
                end: `2020-09-${week(element.week)}T${spliter(element.end)[0]}:${spliter(element.end)[1]}`,
                color: element.grade.color,
                extendedProps: [element.description, element.grade.teacher, element.grade.name]
            })
        });
        res.json(eventsData)
    })
    .catch((error) =>
    {
        console.log(error);
    })
})

router.post('/event/create', (req, res) =>
{
    const {teacher, description, start, end, week} = req.body;
    if(teacher != undefined && description != undefined && start != undefined && end != undefined && week != undefined)
    {
        Event.create(
        {
            description: description,
            start: start,
            end: end,
            week: week,
            gradeId: teacher
        })
        .then(() =>
        {
            res.redirect('/');
        })
        .catch((error) =>
        {
            res.redirect('/');
            console.log(error);
        })
    }
    else
    {
        console.log('events vazio');
        res.redirect('/');
    }
})

router.get('/event/edit/:id', (req, res) =>
{
    const id = req.params.id;

    Event.findByPk(id)
    .then((event) =>
    {
        Grade.findAll()
        .then((grades) =>
        {
            res.render('event/edit', {event, grades})
        })
        .catch((error) =>
        {
            res.redirect('/');
            console.log(error);
        })
    })
    .catch((error) =>
    {
        res.redirect('/');
        console.log(error);
    })
    
})

router.post('/event/update', (req, res) =>
{
    const {id, teacher, description, start, end, week} = req.body;
    if(id != undefined && teacher != undefined && description != undefined && start != undefined && end != undefined && week != undefined)
    {
        Event.update(
        {
            description: description,
            start: start,
            end: end,
            week: week,
            gradeId: teacher
        }, 
        {
            where: {id}
        })
        .then(() =>
        {
            res.redirect('/')
        })
        .catch((error) =>
        {
            res.redirect('/')
            console.log(error);
        })
    }
    else
    {
        res.redirect('/');
    }
});

router.post('/event/delete', (req, res) =>
{
    const id = req.body.id;

    Event.destroy(
    {
        where: {id: id}
    })
    .then(() =>
    {
        res.redirect('/');
    })
    .catch((error) =>
    {
        res.redirect('/');
        console.log(error);
    })
});

router.post('/event/test', (req, res) =>
{
    const {teacher, description, start, end, week} = req.body;
    console.log(teacher);
    res.json({teacher, description, start, end, week})
})

module.exports = router;
