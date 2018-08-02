import { Character } from './../src/character.js';
import { Monster } from './../src/character.js';
import { Warrior } from './../src/character.js';
import { Wizard } from './../src/character.js';
import { Thief } from './../src/character.js';
import { Priest } from './../src/character.js';
import { Item } from './../src/item.js';
import { LightArmor } from './../src/item.js';
import { Staff } from './../src/item.js';
import { levelUpBook } from './../src/item.js';
import { WizardHat } from './../src/item.js';
import { WizardRobe } from './../src/item.js';
import { Spells } from './../src/spells.js';
import { Attack } from './../src/spells.js';
import { Defend } from './../src/spells.js';
import { Magic } from './../src/spells.js';
import { Battle } from './../src/battle.js';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let userName;
let userRace;
let userCharacter;
let userFinal = [];
let enemyMonster;
let newAttack = new Attack();
let newDefend = new Defend();
let newMagic = new Magic();

$(document).ready(function(){
  $("#start").hide();
  $(".battle-zone").hide();
  $("#character-creation").submit(function(event){
    event.preventDefault();
    let userName = $('#name').val();
    let userRace = $('#race').val();
    if ($('#class').val() == 1) {
      userCharacter = new Warrior(userName, userRace);
      userCharacter.spells.push(newAttack);
      userCharacter.spells.push(newDefend);
      userCharacter.spells.push(newMagic);
      console.log(userCharacter);
      userFinal.push(userCharacter);
      console.log(userFinal);
    } else if ($('#class').val() == 2) {
      userCharacter = new Wizard(userName, userRace);
      userCharacter.spells.push(newAttack);
      userCharacter.spells.push(newDefend);
      userCharacter.spells.push(newMagic);
      console.log(userCharacter);
      userFinal.push(userCharacter);
      console.log(userFinal);
    } else if ($('#class').val() == 3) {
      userCharacter = new Thief(userName, userRace);
      console.log(userCharacter);
      userFinal.push(userCharacter);
      userCharacter.spells.push(newAttack);
      userCharacter.spells.push(newDefend);
      userCharacter.spells.push(newMagic);
      console.log(userFinal);
    } else if ($('#class').val() == 4) {
      userCharacter = new Priest(userName, userRace);
      console.log(userCharacter);
      userFinal.push(userCharacter);
      userCharacter.spells.push(newAttack);
      userCharacter.spells.push(newDefend);
      userCharacter.spells.push(newMagic);
      console.log(userFinal);
    }
    console.log(userCharacter);
    $("#hero_name").text(userCharacter.name);

    $("#hero_name").click(function() {
      console.log(userCharacter.name);
    })
    $("#start").show();
  })
  $("#start").click(function(event){
    event.preventDefault();
    $("#start").hide();
    enemyMonster = new Monster('Zugee', 'Goblin');
    $("#first-b-one").text("You have come across " + enemyMonster.name + " the " + enemyMonster.race + " prepare to fight!");
    $(".battle-zone").show();
  })
  $("#battle").submit(function(event){
    event.preventDefault();
    let thisBattle = new Battle(userCharacter, enemyMonster);
    if ($("#user-action").val() == 1){
      console.log($("#user-action").val());
      thisBattle.characterOneAction(newAttack);
      $("#user-result").text("You attacked!" + " and now " + enemyMonster.name + "s health is at " + enemyMonster.hp);
    } // else if ($("#user-action").val() == 2) {
    //   console.log($("user-action").val());
    //   thisBattle.characterOneAction(newDefend);
    //   $("#user-result").text("You defended!");}
      else if ($("#user-action").val() == 3) {
      console.log($("#user-action").val());
      thisBattle.characterOneAction(newMagic);
      $("#user-result").text("You used magic!" + " and now " + enemyMonster.name + "s health is at " + enemyMonster.hp);
    }
  })
})
