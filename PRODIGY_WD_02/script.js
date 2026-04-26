let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Format Time (HH:MM:SS)
function formatTime(time) {
    let seconds = Math.floor(time / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return (
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}

// Update Display
function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = formatTime(elapsedTime);
}

// Start
function start() {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 1000);
}

// Pause
function pause() {
    clearInterval(timerInterval);
}

// Reset
function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

// Lap
function lap() {
    const lapTime = formatTime(elapsedTime);
    const li = document.createElement("li");
    li.textContent = lapTime;
    document.getElementById("laps").appendChild(li);
}