document.addEventListener('DOMContentLoaded', function() 
{
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, 
    {
    locale: 'pt-br',
    timeZone: 'local',
    initialDate: '2020-09-12',
    initialView: 'timeGridWeek',
    dayHeaderFormat: { weekday: 'short' },
    contentHeight: 600,
    expandRows: true,
    nowIndicator: false,
    headerToolbar: false,
    navLinks: false,
    editable: false,
    selectable: true,
    selectMirror: false,
    allDaySlot: false,
    dayMaxEvents: true,
    eventClick: function(info) 
        {
            info.jsEvent.preventDefault();
            const eventMenu = document.querySelector('.menuEventContainer');
            const menuEscButton = document.querySelector('.escButtonMenu');
            menuEvent(info.event.id ,info.event.extendedProps[2], info.event.url, info.event.start, info.event.end, info.event.extendedProps[0], info.event.extendedProps[1]);
            eventMenu.classList.add('active');
            menuEscButton.addEventListener('click', () =>
            {
                eventMenu.classList.remove('active');
            });
        },
    events: eventsReturn
    });
    calendar.render();
    function eventsReturn()
    {
        return fetch('http://localhost:3000/event/data')
                .then((res) =>
                {
                    return res.json()
                })
                .then((data) =>
                {
                    return data
                })
    }
    function menuEvent(id, title, url, start, end, description, teacher)
    {
        const eventId = document.getElementById('eventId');
        const eventName = document.getElementById('eventName');
        const eventDescription = document.getElementById('eventDescription');
        const eventTeacher = document.getElementById('eventTeacher');
        const eventEdit = document.getElementById('eventEdit');
        const eventStart = document.getElementById('eventStart');
        const eventEnd = document.getElementById('eventEnd');
          

        function splited(element)
        {
            const elementToString = element.toString();
            const elementSplited = elementToString.split(' ')[4];
            const result = elementSplited.split(':');
            return `${result[0]}:${result[1]}`;
        }
        eventName.innerText = title;
        eventStart.innerText = splited(start);
        eventEnd.innerText = splited(end);
        eventId.value = id
        eventDescription.innerText = description;
        eventTeacher.innerText = teacher;

        eventEdit.setAttribute('href', url);
    }
    const createEventButton = document.querySelector('.createEventButton');
    const eventAdd = document.querySelector('.addEventContainer');
    const calendarContainer = document.querySelector('.calendarContainer');
    createEventButton.addEventListener('click', () =>
    {
        eventAdd.classList.add('active');

    });
    escButton.addEventListener('click', () =>
    {
        eventAdd.classList.remove('active');
    });
});