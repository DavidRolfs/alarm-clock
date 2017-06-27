var Clock = require('./../js/scripts.js').ClockModule;
var displayImage = function(){
  $("#image").show();
};

$(document).ready(function(){
  $("form.alarm").submit(function(event){
    event.preventDefault();
    var setTime = $("#setTime").val();
    // var setTimeMoment = moment(setTime).format('LT');
    var time = setInterval(function(){
      var currentTime = moment().format('HH:mm');}, 1000
    );
    console.log(setTime);
    console.log(time);
    var alarmClock = new Clock();
    alarmClock.Alarm(setTime, time, displayImage);

  });
});


