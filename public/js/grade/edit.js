const colorElement = document.querySelector('#color');
const colorPicker = document.querySelector('#labelId');

const color = colorElement.value;

console.log(color);

colorPicker.addEventListener('input', () =>
{
    console.log(color);
})

colorPicker.style.bacgroundColor = color;