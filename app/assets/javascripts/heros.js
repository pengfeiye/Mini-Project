// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  var currentMonster
  var heroTest = {}
  
  cookieInit();
  console.log(heroTest)
  $("#action-form").on('submit', function(e){
    e.preventDefault()
    if($(".form-control-plaintext").val() === 'move'){
      move()
    }
    if($(".form-control-plaintext").val() === 'atk'){
      attack()
    }
    $('#game-box').scrollTop($('#game-box')[0].scrollHeight);
    // $(".form-control-plaintext").val("")
  })



function cookieInit(){
  console.log((document.cookie))
  var c = document.cookie
  c = c.split("; ")
  console.log(c)
  c.forEach(function(e){
    k = e.split("=")
    heroTest[`${k[0]}`]=parseInt(k[1])
  })
}

var createMonster = function(){
    let monster = new Monster("peng", 100, 10, 10)
    return monster
  }

function storyLine (content){
  $("#game-content").append(`${content}</br>`)
}

function attack(){
if(!currentMonster){
  storyLine(`There is no monster to attack`)
  }
else{
  storyLine(`${currentMonster.name} is attacked`)
  currentMonster.hp -= (heroTest.hero_atk - currentMonster.def * 1.5);
  if(currentMonster.hp<=0){
    storyLine(`You have killed the monster`)
    heroTest.hero_exp += 30
    currentMonster = false
    console.log(heroTest)
    //
    $.ajax({
                type: "PUT",
                // contentType: "application/json; charset=utf-8",
                url: `/hero/${heroTest.hero_id}`,
                //data: "{'data1':'" + value1+ "', 'data2':'" + value2+ "', 'data3':'" + value3+ "'}",
                data: {level: heroTest.hero_lvl+1},
                dataType: "json",
                success: function (result) {
                //do somthing here
                    console.log("success!!");
                    cookieInit()
                },
                error: function (){
                  console.log("something wrong!");
                }
            });
    //
  }
  else{
    storyLine(`Monster hp: ${currentMonster.hp}`)
  }
}
}

function move() {
  currentMonster = createMonster();
  storyLine(`${currentMonster.name} appeared`)
  storyLine(`Monster hp: ${currentMonster.hp}`)
}

class Monster {
  constructor(name, hp, def, atk){
    this.name = name;
    this.hp = hp;
    this.def = def;
    this.atk = atk;
  }
}

});
