// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  $("#action-form").on('submit', function(e){
    e.preventDefault()
    console.log($(".form-control-plaintext").val())
    if($(".form-control-plaintext").val() === 'move'){
      console.log (<%=@hero.name%>)
    }
    $('#game-box').scrollTop($('#game-box')[0].scrollHeight);
  })
});
