var Clock = require('./../js/scripts.js').ClockModule;
var displayImage = function(){
  $("#image").show();
};

$(document).ready(function(){
  $("form.alarm").submit(function(event){
    event.preventDefault();
    var alarmArray = [];
    var setTime = $("#setTime").val();
    alarmArray.push(setTime);
    alarmArray.forEach(function(element){
      $("#listAlarms").append("<li>" + element + "</li>");
    });
    var alarmClock = new Clock();
    alarmArray.forEach(function(element){
      var timeOff = setInterval(alarmGoOff,1000);
      function alarmGoOff(){
        if( alarmClock.Alarm(element, moment().format('HH:mm')) === true){
          displayImage();
          clearInterval(timeOff);
        }
      };
    });

  });
  $("button#delete").click(function(){
    $("#listAlarms").empty();
  });

  $("button#ok").click(function(){
    $("#image").hide();
  });

});

$(document).ready(function(){
  function update() {
   $("#timeNow").text(moment().format('LTS'));
  }
  setInterval(update, 1000);
});

$(document).ready(function(){
  $("button#snooze").click(function(){
    $("#image").hide()
    setTimeout(Snooze, 3000);
    function Snooze() {
      $("#image").show();
    }

  });
});
