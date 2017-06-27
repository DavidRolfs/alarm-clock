(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Clock = function(){

};

Clock.prototype.Alarm = function(setTime, currentTime, displayImage){
  if(setTime == currentTime){
    displayImage();
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

},{"./../js/scripts.js":1}]},{},[2]);
