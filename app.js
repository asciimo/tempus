const countdownMilliseconds = 25 * 60 * 1000

const timeDisplayEl = document.getElementById("time")

const startButtonEl = document.getElementById("button-start")
const stopButtonEl = document.getElementById("button-stop")
const resetButtonEl = document.getElementById("button-reset")

let countdown
let running = false
let currentCountdownMilliseconds = countdownMilliseconds

const initializeCountdown = (milliseconds) => {
  currentCountdownMilliseconds = milliseconds
  countdown = setInterval(() => { 
    currentCountdownMilliseconds = currentCountdownMilliseconds - 1000
    if (currentCountdownMilliseconds <= 1000) {
      timerComplete()
    } else {
      updateDisplay(currentCountdownMilliseconds)
    }
  }, 1000)
  running = true
}

const formatTime = (milliseconds) => {
  let hours = Math.floor(milliseconds / 1000 / 60 / 60) % 60
  if (hours < 10) {
    hours = `0${hours}`
  }
  let minutes = Math.floor(milliseconds / 1000 / 60) % 60
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  let seconds = Math.floor(milliseconds / 1000) % 60
  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  return `${hours}:${minutes}:${seconds}`
}

const updateDisplay = (milliseconds) => {
  timeDisplayEl.innerText = formatTime(milliseconds)
  console.log(formatTime(milliseconds))
}

const startButtonClickHander = (event) => {
  console.log('you clicked the start button')
  if (!running) {
    initializeCountdown(currentCountdownMilliseconds)
  }
}

const stopButtonClickHander = (event) => {
  console.log('you clicked the stop button')
  clearInterval(countdown)
  running = false
}

const timerComplete = () => {
  clearInterval(countdown)
  running = false
  alert('TIME IS DONE!');
}

const resetButtonClickHander = (event) => {
  console.log('you clicked the reset button')
  clearInterval(countdown)
  initializeCountdown(countdownMilliseconds)
}

startButtonEl.addEventListener("click", startButtonClickHander)
stopButtonEl.addEventListener("click", stopButtonClickHander)
resetButtonEl.addEventListener("click", resetButtonClickHander)
