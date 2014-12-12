(function(){
  'use strict';


$(document).ready(init);

function init () {
  $('#b1').click(b1);
  $('#b2').click(b2);
  $('#b3').click(b3);
  $('#b4').click(b4);
}

function getColors() {
  return ['blue', 'green', 'purple', 'orange', 'pink', 'purple', 'maroon'];
}

function getPerson(){
  let person = {};
  person.name='sally';
  person.age= 25;
  person.gender = 'female';
  return person;
}

function b1 (){
  let colors = getColors();
  console.log(colors[0]);
  console.log(colors[1]);
  console.log(colors[2]); //this is the old way to do it

  let [pri, sec, ter] = getColors(); //this creates three variables that puts the getColors array inside it..does the same things has above
  console.log(pri);
  console.log(sec);
  console.log(ter);


}

function b2 (){
  let [first, ...others] = getColors();
  console.log(first);
  console.log(others);
}

function b3 (){
let p = getPerson();
console.log(p.name);
console.log(p.age);
console.log(p.gender);
}

let {name: n, age: a, gender: g} = getPerson();
console.log(n);
console.log(a);
console.log(g);

function b4 (){
let {name, age, gender} = getPerson(); //if you want your variable to be called the same as the object property
console.log(name);
console.log(age);
console.log(gender);
}





})();
