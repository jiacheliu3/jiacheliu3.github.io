console.log('Script starts and I want you to debrief');

// set the date we're counting down to
var start_date = new Date("Fri Jan 6 22:33:00 EST 2017").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var clock = document.getElementById('clock');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_started = (current_date - start_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_started / 86400);
    seconds_started = seconds_started % 86400;
     
    hours = parseInt(seconds_started / 3600);
    seconds_started = seconds_started % 3600;
     
    minutes = parseInt(seconds_started / 60);
    seconds = parseInt(seconds_started % 60);
     
    // format countdown string + set tag value
    clock.innerHTML = '<span class="days">' + days +  ' <b>Days</b></span> <span class="hours">' + hours + ' <b>Hours</b></span> <span class="minutes">'
    + minutes + ' <b>Minutes</b></span> <span class="seconds">' + seconds + ' <b>Seconds</b></span>';  
 
}, 1000);