var Clock = require('./../js/scripts.js').ClockModule;
var displayImage = function(){
  $("#image").show();
};



$(document).ready(function(){

  function update() {
   $("#timeNow").text(moment().format('LTS'));
  }
  setInterval(update, 1000);

  // var time = moment().format('HH:mm');

  $("form.alarm").submit(function(event){
    event.preventDefault();
    var setTime = $("#setTime").val();
    var alarmClock = new Clock();

    var timeOff = setInterval(alarmGoOff,1000);
      function alarmGoOff(){
      if( alarmClock.Alarm(setTime, moment().format('HH:mm')) === true){
        console.log("hello");
        displayImage();
        clearInterval(timeOff);
      }

    };



  });
});


