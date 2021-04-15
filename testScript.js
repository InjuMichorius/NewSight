//Change colors
let root = document.documentElement;
const blue = document.getElementById('blue')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const lightBlue = document.getElementById('light-blue')
const black = document.getElementById('black')
const white = document.getElementById('white')

blue.addEventListener('click', () => {
    root.style.setProperty('--background', "#112e51")
})

red.addEventListener('click', () => {
    root.style.setProperty('--background', "#cd2026")
})

yellow.addEventListener('click', () => {
    root.style.setProperty('--background', "#fdb81e")
})

lightBlue.addEventListener('click', () => {
    root.style.setProperty('--background', "#02bfe7")
})

let currentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--text')

black.addEventListener('click', () => {
    root.style.setProperty('--text', "black")
})

white.addEventListener('click', () => {
    root.style.setProperty('--text', "white")
})

console.log(currentTextColor)
//Font-size input
const inputH1 = document.getElementById('input-h1')
const inputH2 = document.getElementById('input-h2')
const inputP1 = document.getElementById('input-p1')
const inputP2 = document.getElementById('input-p2')

//Declare text
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

//Add eventlisteners
inputH1.addEventListener('click', increaseh1)
inputH2.addEventListener('click', increaseh2)
inputP1.addEventListener('click', increasep1)
inputP2.addEventListener('click', increasep2)

//Functions
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