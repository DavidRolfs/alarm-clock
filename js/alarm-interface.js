var Clock = require('./../js/scripts.js').ClockModule;
var displayImage = function(){
  $("#image").show();
};

$(document).ready(function(){
  $("form.alarm").submit(function(event){
    event.preventDefault();
    var setTime = $("#setTime").val();
    // var setTimeMoment = moment(setTime).format('LT');
    var currentTime = moment().format('HH:mm');
    console.log(setTime);
    console.log(currentTime);
    var alarmClock = new Clock();
    alarmClock.Alarm(setTime, currentTime, displayImage);

  });
});
