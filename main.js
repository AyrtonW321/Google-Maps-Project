/*
let timer;
let minutes;

function startTimer() {
  minutes = parseInt(document.getElementById("minutes").value); // Get input value

  if (isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid time (positive number of minutes)");
    return;
  }

  const seconds = minutes * 60; // Convert minutes to seconds

  document.getElementById("timer").textContent = formatTime(seconds); // Update initial display

  timer = setInterval(() => {
    seconds--; // Decrement seconds

    if (seconds <= 0) {
      clearInterval(timer); // Stop the timer when seconds reach 0
      document.getElementById("timer").textContent = "Time's Up!";
    } else {
      document.getElementById("timer").textContent = formatTime(seconds);
    }
  }, 1000); // Update timer every second
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}
*/

let tasks = []; // Array to store tasks

function addTask() {
  const taskName = document.getElementById("new-task").value;
  if (taskName === "") {
    alert("Please enter a task name!");
    return;
  }

  const newTask = {
    name: taskName,
    completed: false,
  };

  tasks.push(newTask);
  renderTasks();
  document.getElementById("new-task").value = ""; // Clear input field
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear existing list items

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement("li");
    listItem.textContent = task.name;

    listItem.classList.add("task-item"); // Add basic styling

    if (task.completed) {
      listItem.classList.add("completed"); // Green highlight for completed tasks
    } else {
      listItem.classList.add("incomplete"); // Red highlight for incomplete tasks
    }

    listItem.addEventListener("click", function () {
      toggleTaskCompletion(i);
    });

    taskList.appendChild(listItem);
  }
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}
