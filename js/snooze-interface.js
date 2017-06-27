$(document).ready(function(){
  $("button#snooze").click(function(){
    $("#image").hide()
    setTimeout(Snooze, 3000);
    function Snooze() {
      $("#image").show();
    }

  });
});
