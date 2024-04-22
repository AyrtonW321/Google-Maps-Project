'use strict'

let timerRunning = false;

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

function pomodoro(){
  let twentyFiveMinutes = 60 * 1;
  timerRunning = true;
  const displayTime = document.getElementById('timer');
  startTimer(twentyFiveMinutes, displayTime);
}

function shortBreak(){
  let fiveMinutes = 60 * 5;
  const displayTime = document.getElementById('timer');
  startTimer(fiveMinutes, displayTime);
}

function longBreak(){
  let fifteenMinutes = 60 * 15;
  const displayTime = document.getElementById('timer');
  startTimer(fifteenMinutes, displayTime);
}