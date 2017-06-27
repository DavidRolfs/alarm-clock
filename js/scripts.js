Clock = function(){

};

Clock.prototype.Alarm = function(setTime, currentTime, displayImage){
  if(currentTime == setTime){
    displayImage();
  }

};

function update() {
 $("#timeNow").html(moment().format('LTS'));
}

setInterval(update, 1000)
exports.ClockModule = Clock;
