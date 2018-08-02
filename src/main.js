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
let thisBattle;
let newAttack = new Attack();
let newDefend = new Defend();
let newMagic = new Magic();

$(document).ready(function(){
  $("#start").hide();
  $(".battle-zone").hide();
  $("#monster-turn").hide();
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
    $("#character-creation").hide();
  })
  $("#start").click(function(event){
    event.preventDefault();
    $("#start").hide();
    enemyMonster = new Monster('Zugee', 'Goblin');
    $("#first-b-one").text("You have come across " + enemyMonster.name + " the " + enemyMonster.race + " prepare to fight!");
    $("#monster-turn").hide();
    $(".battle-zone").show();
    thisBattle = new Battle(userCharacter, enemyMonster);
  })
  $("#battle").submit(function(event){
    event.preventDefault();
    let userChanceToHit = Math.floor(Math.random()* 11);
      if ($("#user-action").val() == 1){
        console.log($("#user-action").val());
        if (userChanceToHit >= 3) {
          thisBattle.characterOneAction(newAttack);
          $("#user-result").text("You attacked! It did 10 damage!" + " and now " + enemyMonster.name + "s health is at " + enemyMonster.hp);

        } else {
          $("#user-result").text("You missed! Darn!");
          $("battle-zone").hide();
        }
        $("#user-action").hide();
        $("#user-set-action").hide();
        $("#monster-turn").show();
      } else if ($("#user-action").val() == 2) {
          console.log($("#user-action").val());
          if (userChanceToHit >= 3) {
          thisBattle.characterOneAction(newMagic);
          $("#user-result").text("You used magic! It did 20 damage!" + " and now " + enemyMonster.name + "s health is at " + enemyMonster.hp);
        } else {
          $("#user-result").text("You missed! Darn!");
        }
        $("#user-action").hide();
        $("#user-set-action").hide();
        $("#monster-turn").show();
      }
      if (enemyMonster.hp <= 0 ) {
        $("#user-result").text("The enemy is defeated! Good job!")
        $("battle-zone").hide();
        $("#monster-turn").hide();
        $("#monster-result").hide();
        $("#first-b-one").hide();
      }
  })
  $("#monster-turn").click(function(event){
    event.preventDefault();
    console.log("Monster went!");
    console.log(userCharacter.hp);
    let monsterChoice = Math.floor(Math.random()* 11);
    if (monsterChoice >= 5){
      thisBattle.characterTwoAction(newAttack);
      $("#monster-result").text(enemyMonster.name + " attacked you! It did 10 damage! You now have " + userCharacter.hp + " health!");
      if (userCharacter.hp <= 0 ) {
        $("#user-result").text("The enemy defeated you! You lose!")
      }
    }
    else if (monsterChoice <= 3) {
      $("#monster-result").text(enemyMonster.name + " missed!")
    } else {
      thisBattle.characterTwoAction(newMagic);
      $("#monster-result").text(enemyMonster.name + " used magic on you! It did 20 damage! You now have " + userCharacter.hp + " health!");
      if (userCharacter.hp <= 0 ) {
        $("#user-result").text("The enemy defeated you! You lose!")
        $("battle-zone").hide();
        $("#monster-turn").hide();
        $("#monster-result").hide();
        $("#first-b-one").hide();
      }
    }
    $("#monster-turn").hide();
    $("#user-action").show();
    $("#user-set-action").show();
  })
})
