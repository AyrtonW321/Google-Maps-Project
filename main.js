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
