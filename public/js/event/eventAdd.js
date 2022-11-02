const selected = document.querySelector('.selected');
const optionContainer = document.querySelector('.optionContainer');
const optionList = document.querySelectorAll('.optionContainer .option');
const escButton = document.querySelector('.escButton');
const eventAdd = document.querySelector('.addEventContainer');
const calendarContainer = document.querySelector('calendarContainer');

selected.addEventListener('click', () =>
{
    optionContainer.classList.toggle('active');
})

optionList.forEach((element) =>
{
    element.addEventListener('click', () =>
    {
        selected.innerHTML = `${element.innerHTML} <i class='bx bx-chevron-down'></i>`;
        optionContainer.classList.remove('active');
    })
});
