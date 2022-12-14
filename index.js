//Display current time
// create an instance that we can use to manipulate the div inside HTML to display current time
let displayDiv = displayTime;
const clock = () => {
    let newDate = new Date();
    var currentHour = formatTime(newDate.getHours());
    var currentMin = formatTime(newDate.getMinutes());
    var currentSec = formatTime(newDate.getSeconds());
    displayDiv.innerHTML = `${currentHour} : ${currentMin} : ${currentSec}`;
};
// Let us concatenate a leading zero everytime sec, min or hr is less than 10
const formatTime = (currentTime) => {
    if (currentTime < 10) {
        return `0 ${currentTime}`;
    }
    return currentTime;
};
setInterval(clock, 1000);

//Our Sound to be played once the countdown reaches zero.
// let newSound = new Audio()
//Countdown Section
const countDown = () => {
    //Get all the inputs.
    let countedUserHour = userInputHr.value;
    let countedUserMin = userInputMin.value;
    let countedUserSec = userInputSec.value;
    let beepForCountDown = new Audio("audio/Countdown.wav");
    //Reduce the userInput for seconds by 1
    countedUserSec--;
    //Set the reduced value back to the user
    userInputSec.value = countedUserSec;
    //Reduce the userInput for seconds by 1 everysecond.
    setTimeout(countDown, 1000);
    //First case is when there is no user input for hour and input boxes and the seconds value is < 0
    if (countedUserSec < 0 && countedUserMin == 0 && countedUserHour == 0) {
        clearTimeout(countDown);
        userInputHr.value = "00";
        userInputMin.value = "00";
        userInputSec.value = "00";
        beepForCountDown.play();
        setTimeout(stopCountdownBeep, 3000);
    }
    //Second case where the seconds is < 0 but the minute box is greater than zero. Seconds becomes 59.
    if (countedUserSec < 0 && userInputMin.value > 0) {
        userInputSec.value = 59;
    }
    // And we reduce the the minute also.
    if (countedUserSec < 0 && countedUserMin > 0) {
        userInputMin.value--;
    }
    // When the hour box is greater than zero, we want both minute and seconds boxes to return to 59
    if (countedUserSec < 0 && userInputMin.value >= 0 && countedUserHour > 0) {
        userInputSec.value = 59;
        userInputMin.value = 59;
        userInputHr.value--;
    }
};

const stopCountdownBeep = () => {
    beepForCountDown.pause();
};

// Stopwatch Section

// Start Watch
const startWatch = () => {
    mywatchmillisec.value++;
    timeout = setTimeout(startWatch, 10);
    if (mywatchmillisec.value == 60) {
        mywatchsec.value++;
        mywatchmillisec.value = 0;
    }
    if (mywatchsec.value == 60) {
        mywatchmin.value++;
        mywatchsec.value = 0;
        mywatchmillisec.value = 0;
    }
    if (mywatchmin.value == 60) {
        mywatchhr.value++;
        mywatchmin.value = 0;
        mywatchsec.value = 0;
        mywatchmillisec.value = 0;
    }
};

const isPaused = () => {
    let timeCondition = false;
    if (timeCondition == false) {
        clearTimeout(timeout);
    }
};

//Reset watch
const resetWatch = () => {
    clearTimeout(timeout);
    mywatchhr.value = "00";
    mywatchmin.value = "00";
    mywatchsec.value = "00";
    mywatchmillisec.value = "00";
};

//Alarm Section

let mySound = new Audio("audio/Alarm.wav");

const setAlarm = () => {
    let alarmTime = new Date();
    let alarmHour = alarmHr.value;
    let alarmMinutes = alarmMin.value;
    if (alarmHr.value == "" || alarmMin.value == "") {
        document.getElementById("disp").innerHTML = `Fields cannot be empty`;
        document.getElementById("disp").style.visibility = "visible";
    } else {
        document.getElementById("disp").innerHTML = `Alarm is set to ${alarmHour} : ${alarmMinutes}`;
        document.getElementById("disp").style.visibility = "visible";
        document.getElementById("alarmHr").style.visibility = "hidden";
        document.getElementById("alarmMin").style.visibility = "hidden";
    }

    if (alarmHour == alarmTime.getHours() && alarmMinutes == alarmTime.getMinutes()) {
        mySound.play();
    } else {
        setTimeout(setAlarm, 1000);
    }
};
const stopAlarm = () => {
    let alarmQuestion = Math.floor(Math.random() * 10000);
    let alarmAnswer = prompt(`Prove that you are awake: Type this number(s):  ${alarmQuestion}`);
    if (alarmAnswer == alarmQuestion) {
        document.getElementById("disp").style.visibility = "hidden";
        document.getElementById("alarmHr").style.visibility = "visible";
        document.getElementById("alarmMin").style.visibility = "visible";
        alarmHr.value = "";
        alarmMin.value = "";
        mySound.pause();
    } else {
        mySound.play();
        setTimeout(3000);
    }
};
