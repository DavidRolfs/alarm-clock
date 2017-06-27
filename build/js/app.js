(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Clock = function(){

};

Clock.prototype.Alarm = function(setTime, currentTime){
  if (currentTime === setTime){
    return true;
  }
  else{
    return false;
  }

};




exports.ClockModule = Clock;

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":1}]},{},[2]);
