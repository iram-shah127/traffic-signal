
console.log("Signal Started");

const red = document.getElementById("box2");
const yellow = document.getElementById("box3");
const green = document.getElementById("box4");
const timer = document.getElementById("timer");

let countdownTimeout;
let signalTimeout;

function startTimer() {
    clearTimeout(countdownTimeout);

    let count = 4;
    timer.textContent = count;

    function tick() {
        count--;
        timer.textContent = count;

        if (count > 0) {
            countdownTimeout = setTimeout(tick, 1000);
        }
    }

    countdownTimeout = setTimeout(tick, 1000);
}

function redSignal() {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "rgba(255,255,0,0.3)";
    green.style.backgroundColor = "rgba(0,255,0,0.3)";

    startTimer();
    signalTimeout = setTimeout(changeSignal, 5000);
}

function changeSignal() {
    red.style.backgroundColor = "rgba(255,0,0,0.3)";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "rgba(0,255,0,0.3)";

    startTimer();
    signalTimeout = setTimeout(greenSignal, 5000);
}

function greenSignal() {
    red.style.backgroundColor = "rgba(255,0,0,0.3)";
    yellow.style.backgroundColor = "rgba(255,255,0,0.3)";
    green.style.backgroundColor = "green";

    startTimer();
    signalTimeout = setTimeout(redSignal, 5000);
}

redSignal();
