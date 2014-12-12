/* exported Rocky */
/* global calculateDamage:true */
/* global fighterId: true */
/* jshint unused:false */

class Rocky{
  constructor(name, weapon, age, gender, photo){
    this.id = fighterId++;
    this.name = name;
    this.age = age * 1; //passed in as string..made into a number with the * 1
    this.gender = gender;
    this.photo = `../media/rocky.png`;
    this.health = 100;
    this.weapon = weapon;
    this.type = 'rocky';
    this.damage = calculateDamage(weapon);
  }
}
