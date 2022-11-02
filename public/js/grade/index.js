const createEventButton = document.querySelector('.createGradeButton');
const eventAdd = document.querySelector('.addGradeContainer');
const escButton = document.querySelector('.escButton')
createEventButton.addEventListener('click', () =>
{
    eventAdd.classList.add('active');

});
escButton.addEventListener('click', () =>
{
    eventAdd.classList.remove('active');
});