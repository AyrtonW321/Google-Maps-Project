const countdown = document.getElementById("countdown");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const pomodoroButton = document.getElementById("pomodoro");
const shortBreakButton = document.getElementById("shortBreak");
const longBreakButton = document.getElementById("longBreak");

let startingMinutes = 25;
let time = startingMinutes * 60;
let timerActive = true;

function displayTime() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdown.innerHTML = `${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
}

function checkTime() {
  return time >= 0;
}

function activateTimer() {
  timerActive = true;
}

function updateTime() {
  displayTime();
  time--;
}

function startCountdown() {
  setTimeout(function () {
    if (timerActive) {
      if (checkTime()) {
        updateTime();
        startCountdown();
      }
    }
  }, 1000);
}

function changeCountdownAmount(mins, text) {
  startingMinutes = mins;
  time = startingMinutes * 60;
  timerActive = false;
  displayTime();
}

function clickResetButton() {
  startStopButton.innerHTML = "Start";
  time = startingMinutes * 60;
  timerActive = false;
  displayTime();
}

function clickStartStopButton() {
  if (startStopButton.innerHTML === "Start") {
    startStopButton.innerHTML = "Stop";
    activateTimer();
    startCountdown();
  } else {
    startStopButton.innerHTML = "Start";
    timerActive = false;
  }
}

function clickPomodoroButton() {
  changeCountdownAmount(25, "Pomodoro");
  startStopButton.innerHTML = "Start";
}

function clickShortBreakButton() {
  changeCountdownAmount(5, "Short Break");
  startStopButton.innerHTML = "Start";
}

function clickLongBreakButton() {
  changeCountdownAmount(10, "Long Break");
  startStopButton.innerHTML = "Start";
}

function tasks(){
  const getTask = document.getElementById("newTask");

  const task = getTask.value.trim();

  if (!task) {
    alert("Please enter a task!");
    return;
  }

  const list = document.getElementById("taskList");
  const newItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", function() {
    this.parentNode.classList.toggle("completed");
  });

  const taskSpan = document.createElement("span");
  taskSpan.textContent = task;
  newItem.appendChild(checkbox);
  newItem.appendChild(taskSpan);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", function() {
    this.parentNode.remove();
  });

  newItem.appendChild(deleteButton);

  list.appendChild(newItem);

  getTask.value = "";
}

startStopButton.addEventListener("click", clickStartStopButton);
resetButton.addEventListener("click", clickResetButton);
pomodoroButton.addEventListener("click", clickPomodoroButton);
shortBreakButton.addEventListener("click", clickShortBreakButton);
longBreakButton.addEventListener("click", clickLongBreakButton);