'use strict';

let inputUrl;
const buttonInput = createButton('Введите урл', setInputUrl)
const buttonRedirect = createButton('Перейти по ссылке', redirect)

document.body.append(buttonInput, buttonRedirect);

function createButton(text, func) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('button');
    button.onclick = func;
    return button;
}

function setInputUrl() {
    const input = prompt('Введите урл');
    if(input !== null && input.trim() !== '') {
        inputUrl = input;
        return;
    }
    alert('Повторите попытку!');
}

function redirect() {
    if(inputUrl !== null && inputUrl !== undefined) {
        window.location.href = inputUrl;
        return;
    }
    alert('Укажите ссылку!');
}

