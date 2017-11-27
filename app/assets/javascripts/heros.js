// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  var createMonster = function(){
    let monster = {
      name: "peng",
      hp: 100,
      def: 10,
      atk: 20
    }

    return monster.name + " has appeared! </br>"
  }
  console.log(document.cookie)
  $("#action-form").on('submit', function(e){
    e.preventDefault()
    if($(".form-control-plaintext").val() === 'move'){
      $("#game-content").append(createMonster)
    }
    $('#game-box').scrollTop($('#game-box')[0].scrollHeight);
  })
});
