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

$(document).ready(function(){
  var timeNow = moment().format('LTS');
  $("#timeNow").text(timeNow);
  var displayTime = function(){
    $("#timeNow");
  };
  setInterval(displayTime, 1000);



  setInterval(console.log(timeNow), 1000);
});
