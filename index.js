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
