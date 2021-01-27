const button = document.querySelector('.generate');
const colour = document.querySelector('.colour');

button.addEventListener('click', setColour);
colour.addEventListener('click', copy);

function setColour() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = randomColor;
    colour.innerText = randomColor;
}

function copy() {
    let text = colour.innerText;
    let input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();

    document.execCommand('copy');
    document.body.removeChild(input);

    alert('Copied: ' + text);
}