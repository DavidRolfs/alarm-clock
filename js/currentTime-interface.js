$(document).ready(function(){
  function update() {
   $("#timeNow").text(moment().format('LTS'));
  }
  setInterval(update, 1000);
});
