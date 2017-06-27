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
