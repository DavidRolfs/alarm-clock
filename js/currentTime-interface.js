$(document).ready(function(){
  var timeNow = moment().format('LTS');
  $("#timeNow").text(timeNow);
  var displayTime = function(){
    $("#timeNow");
  };
  setInterval(displayTime, 1000);



  setInterval(console.log(timeNow), 1000);
});
