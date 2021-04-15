const inputH1 = document.getElementById('input-h1')
const inputH2 = document.getElementById('input-h2')
const inputP1 = document.getElementById('input-p1')
const inputP2 = document.getElementById('input-p2')

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

inputH1.addEventListener('click', increaseh1)
inputH2.addEventListener('click', increaseh2)
inputP1.addEventListener('click', increasep1)
inputP2.addEventListener('click', increasep2)

function increaseh1() {
    style = window.getComputedStyle(h1, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    h1.style.fontSize = (currentSize + 16) + 'px';
}

function increaseh2() {
    style = window.getComputedStyle(h2, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    h2.style.fontSize = (currentSize + 16) + 'px';
}

function increasep1() {
    style = window.getComputedStyle(p1, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    p1.style.fontSize = (currentSize + 4) + 'px';
}

function increasep2() {
    style = window.getComputedStyle(p2, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    p2.style.fontSize = (currentSize + 4) + 'px';
}
console.log('Hello world!')