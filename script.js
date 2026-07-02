let timer;
let running = false;

let workMinutes = 25;
let breakMinutes = 5;

let timeLeft = workMinutes * 60;
let isWorkSession = true;

const timerDisplay = document.getElementById("timer");
const sessionsDisplay = document.getElementById("sessions");

let sessions = localStorage.getItem("pomodoroSessions") || 0;
sessionsDisplay.textContent = sessions;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function playSound() {
    const audio = new Audio(
        "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
    );
    audio.play();
}

function startTimer() {

    if (running) return;

    workMinutes =
        parseInt(document.getElementById("workTime").value);

    breakMinutes =
        parseInt(document.getElementById("breakTime").value);

    running = true;

    timer = setInterval(() => {

        timeLeft--;

        updateDisplay();

        if (timeLeft <= 0) {

            clearInterval(timer);
            running = false;

            playSound();

            if (isWorkSession) {

                sessions++;
                localStorage.setItem(
                    "pomodoroSessions",
                    sessions
                );

                sessionsDisplay.textContent = sessions;

                alert("Work session complete! Take a break.");

                isWorkSession = false;
                timeLeft = breakMinutes * 60;

            } else {

                alert("Break finished! Back to work.");

                isWorkSession = true;
                timeLeft = workMinutes * 60;
            }

            updateDisplay();
        }

    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {

    clearInterval(timer);
    running = false;

    workMinutes =
        parseInt(document.getElementById("workTime").value);

    timeLeft = workMinutes * 60;

    isWorkSession = true;

    updateDisplay();
}

document
    .getElementById("themeBtn")
    .addEventListener("click", () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark")
                ? "dark"
                : "light"
        );
    });

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

updateDisplay();