/* global Chuck:true */
/* global Inigo:true */
/* global Rocky:true */
/* global Jackie:true */
/* jshint unused:false */



(function(){
    'use strict';

  $(document).ready(init);

  let fighters = [];

  function init(){
    $('#add').click(add);
    $('body').on('click', '.training', train);
  }

  function train() {
    console.log(this);
  }

  function add(){
    let name = $('#name').val();
    let age = $('#age').val();
    let gender = $('#gender').val();
    let photo = $('#photo').val();
    let type = $('#type').val();
    let weapon = $('#weapon').val();
    let fighter;

    switch(type) {
      case 'Inigo Montoya':
      fighter =  new Inigo(name, weapon, age, gender, photo);
        break;
      case 'Chuck Norris':
      fighter = new Chuck(name, weapon, age, gender, photo);
        break;
      case 'Rocky Balboa':
        fighter = new Rocky(name, weapon, age, gender, photo);
        break;
      case 'Jackie Chan':
        fighter = new Jackie(name, weapon, age, gender, photo);
        break;
      }
      fighters.push(fighter);
      show(fighter);
    }


  function show(fighter){

     $(`#${fighter.type}`).append(`<div data-id=${fighter.id} class=${fighter.type}>
                                       <div class=photo style='background-image:url("${fighter.photo}")'></div>
                                       <div class=meta>
                                         <div class=name>Name: ${fighter.name}</div>
                                         <div class=age>Age: ${fighter.age}</div>
                                         <div class=gender>Gender: ${fighter.gender}</div>
                                         <div class=health>Health: ${fighter.health}%</div>
                                         <div class=damage>Damage: ${fighter.damage}</div>
                                         <div class=weapon><img src=../media/${fighter.weapon}.gif></div>
                                         <div class=train><img src=../media/train.png></div>
                                       </div>`);

      
  }



})();
