// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  var currentMonster
  var heroTest = {}

  cookieInit();
  var levelExp = (heroTest.hero_lvl * 1.5) * 50 + 100
  var heroHP = heroTest.hero_def * 50
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
    heroTest.hero_exp += 10
    console.log(levelExp)
    if(heroTest.hero_exp >= levelExp){
      levelUp()
      storyLine(`You have level up! Current level: ${heroTest.hero_lvl} !`)
    }
    currentMonster = false
    console.log(heroTest)
    //
    $.ajax({
                type: "PUT",
                // contentType: "application/json; charset=utf-8",
                url: `/hero/${heroTest.hero_id}`,
                //data: "{'data1':'" + value1+ "', 'data2':'" + value2+ "', 'data3':'" + value3+ "'}",
                data: {exp: heroTest.hero_exp, level: heroTest.hero_lvl, atk: heroTest.hero_atk, def: heroTest.hero_def, agi: heroTest.hero_agi, luk: heroTest.hero_luk, wis: heroTest.hero_wis},
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

function levelUp(){
  heroTest.hero_lvl += 1
  heroTest.hero_atk = heroTest.hero_atk + (heroTest.hero_atk * 1/3)
  heroTest.hero_def = heroTest.hero_def + (heroTest.hero_def * 1/3)
  heroTest.hero_agi = heroTest.hero_agi + (heroTest.hero_agi * 1/3)
  heroTest.hero_luk = heroTest.hero_luk + (heroTest.hero_luk * 1/3)
  heroTest.hero_wis = heroTest.hero_wis + (heroTest.hero_wis * 1/3)

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
