Clock = function(){

};

Clock.prototype.Alarm = function(setTime, currentTime, displayImage){
  if(setTime == currentTime){
    displayImage();
  }

};

exports.ClockModule = Clock;
