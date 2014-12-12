/* exported Inigo */
/* global calculateDamage:true */
/* jshint unused:false */
class Inigo{
  constructor(name, weapon, age, gender, photo){
    this.name = name;
    this.age = age * 1; //passed in as string..made into a number with the * 1
    this.gender = gender;
    this.photo = `../media/inigo.png`;
    this.health = 100;
    this.weapon = weapon;
    this.type = 'inigo';
    this.damage = calculateDamage(weapon);
  }
}
