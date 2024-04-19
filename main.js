'use strict'

const timerDisplay = document.getElementById('timer');
const minutes = document.getElementById('minutes');

const timerInterval = setInterval(updateTimer, 1000);

function startTimer(){
    timeLeft--;
    timerDisplay.textContent = ${timeLeft};
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
}

