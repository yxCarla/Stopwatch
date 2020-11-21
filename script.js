function mainFunction() {

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var msEl = document.getElementById('ms');
var secondsEl = document.getElementById('seconds');
var minutesEl = document.getElementById('minutes');

var minutes = 00;
var seconds = 00;
var ms = 00;
var interval;

start.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

stop.onclick = function() {
    clearInterval(interval);
}

reset.onclick = function() {
    clearInterval(interval);

    minutes = "00";
    seconds = "00";
    ms = "00";

    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    msEl.innerHTML = ms;
}

function startTimer() {
    ms++; 
    
    if(ms < 9){
        msEl.innerHTML = "0" + ms;
    }
    
    if (ms > 9){
        msEl.innerHTML = ms;

    } 
    
    if (ms > 99) {
        seconds++;
        secondsEl.innerHTML = "0" + seconds;
        ms = 0;
        msEl.innerHTML = "0" + 0;
    }
    
    if (seconds > 9) {
        secondsEl.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        minutesEl.innerHTML = "0" + minutes;
        seconds = 0;
        secondsEl.innerHTML = "0" + 0;
    }

    if (minutes > 59) {
        minutesEl.innerHTML = minutes;
    }
}

}