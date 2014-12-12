/* exported calculateDamage */
/* global calculateDamage:true */
/* exported fighterId */

var fighterId = 1;

function calculateDamage(weapon){
  'use strict';
  let max;

  switch(weapon){
  case 'roundhousekick':
      max = 10;
      break;
  case 'judochop':
      max = 20;
      break;
  case 'uppercut':
      max = 15;
      break;
  case 'swordswipe':
      max = 30;
      break;

  }

  return Math.ceil(Math.random() * max);
}
