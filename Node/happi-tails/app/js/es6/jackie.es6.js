/* exported Jackie */
/* global calculateDamage:true */
/* jshint unused:false */
class Jackie{
  constructor(name, weapon, age, gender, photo){
    this.name = name;
    this.age = age * 1; //passed in as string..made into a number with the * 1
    this.gender = gender;
    this.photo = `../media/jackie.png`;
    this.health = 100;
    this.weapon = weapon;
    this.type = 'jackie';
    this.damage = calculateDamage(weapon);
  }
}
