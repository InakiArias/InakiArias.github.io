const initDays = 1;
const initHours = 16;
const initMins = 29;
const initSecs = 27;
// const initDays = 0;
// const initHours = 0;
// const initMins = 0;
// const initSecs = 3;

/* +1 to compensate for the initial update */
let countdownTotal = initSecs + 60 * initMins + 60 * 60 * initHours + 24 * 60 * 60 * initDays + 1;

function update() {
    /* To compensate that Interval minimum time is 4ms */
    if (currentSpeed > 250) {
        const decrease = Math.floor(currentSpeed / 250);
        countdownTotal -= decrease  ;
    }
    else {
        countdownTotal--;
    }

    if (countdownTotal <= 0) {
        clearInterval(intervalId);
        countdownTotal = 0;
        document.querySelector(".offer-ended").classList.toggle("visible");
    }

    let secs = countdownTotal % 60;
    let remainderMins = Math.floor(countdownTotal / 60);
    
    let mins = remainderMins % 60;
    let remainderHours = Math.floor(remainderMins / 60);
    
    let hours = remainderHours % 24;
    let days = Math.floor(remainderHours / 24);
    
    const contents = document.querySelectorAll(".countdown-container .content");
    
    contents[0].textContent = String(days).padStart(2, "0");
    contents[1].textContent = String(hours).padStart(2, "0");
    contents[2].textContent = String(mins).padStart(2, "0");
    contents[3].textContent = String(secs).padStart(2, "0");
}

let currentSpeed = 1;
const SPEED_CHANGE_FACTOR = 2;
let intervalId = setInterval(update, 1000);

function speedDown() {
    currentSpeed /= SPEED_CHANGE_FACTOR;
    clearInterval(intervalId);
    intervalId = setInterval(update, 1000 / currentSpeed);
}

function speedUp() {
    currentSpeed *= SPEED_CHANGE_FACTOR;
    clearInterval(intervalId);
    intervalId = setInterval(update, 1000 / currentSpeed);
}

update();