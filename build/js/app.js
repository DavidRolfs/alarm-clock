(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Clock = function(){

};

Clock.prototype.Alarm = function(setTime, currentTime){
  // if(currentTime !== setTime){
  // currentTime = setInterval(currentTime, 1000);
  console.log(currentTime);
  console.log(setTime);
  //
  //   return ;
  // }
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



},{"./../js/scripts.js":1}]},{},[2]);
