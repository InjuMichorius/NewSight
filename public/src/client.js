const play = document.getElementById('play')
const pause = document.getElementById('pause')
const player = document.getElementById('player')

play.addEventListener('click', playFile)
pause.addEventListener('click', pauseFile)

pause.style.display = 'none'

function playFile() {
    player.play()
    play.style.display = 'none'
    pause.style.display = 'block'
}

function pauseFile() {
    player.pause()
    pause.style.display = 'none'
    play.style.display = 'block'
}

console.log('Test');