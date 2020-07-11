// DEFINE CONSTANTS
const timerButton = document.getElementById("timer-btn");
const timerRecords = document.getElementById("timer-records");

// DEFINE ALL DIALS
var milliseconds = document.getElementById("milliseconds");
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");

var isRunning = false;

timerButton.onclick = toggleTimer;

function toggleTimer() {
    if (isRunning === false) {
        // REGISTER TIME
        if (milliseconds.innerHTML !== "00") {
            registerTime();
        }

        // CLEAR TIMER
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
        milliseconds.innerHTML = "00";

        // START TIMER
        isRunning = true;
        upTimer();

        // CHANGE BUTTON
        timerButton.innerHTML = "STOP";

    } else {
        // STOP TIMER
        isRunning = false;
        timerButton.innerHTML = "START";
    }
}

function upTimer() {
    if (isRunning !== true) {
        return;
    }

    // ADJUST THE DIALS
    if (milliseconds.innerHTML === "99") {
        milliseconds.innerHTML = "00";
        addToDial(seconds);
    }
    if (seconds.innerHTML === "59") {
        seconds.innerHTML = "00";
        addToDial(minutes);
    }
    addToDial(milliseconds);
    setTimeout(upTimer, 10);
}

function addToDial(dial) {
    dial.innerHTML = ("0" + (+dial.innerHTML + 1)).slice(-2);
}

function registerTime() {
    var record = document.createElement("li");
    var recordAmmount = +timerRecords.children.length + 1;

    if (recordAmmount % 2 === 0) {
        record.classList.add("record-dark");
    } else {
        record.classList.add("record-light");
    }
    record.innerHTML = `<b>${recordAmmount}</b>. ${minutes.innerHTML}:${seconds.innerHTML}:${milliseconds.innerHTML}`;
    timerRecords.appendChild(record);
}