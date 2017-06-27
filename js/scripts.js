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
