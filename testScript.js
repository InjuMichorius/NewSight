const inputH1 = document.getElementById('input-h1')
const inputH2 = document.getElementById('input-h2')
const inputP = document.getElementById('input-p')

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

inputH1.addEventListener('click', increase)
function increase() {
    style = window.getComputedStyle(h1, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    h1.style.fontSize = (currentSize + 16) + 'px';
}

console.log('Hello world!')