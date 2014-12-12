/* exported Pet */
/* global _, pets */
/* jshint unused: false*/
class Pet{
  constructor(species, speciesImg, gender, age=2, name='Kristian'){
    this.species = species;
    this.speciesImg = `../media/${speciesImg}`;
    this.gender = gender;
    this.age = age * 1;
    this.name = name;

    this.health = _.random(10,100);
    this.full = _.random(5,100);
    this.mood = _.random(1,100);
  }

  static find(name){
  return  _(pets).find(p=>p.name === name);
  }

  eat(){
    let stat = this.full += _.random(1,6);
    if(this.full >= 100){this.full = 100;}
    console.log(this.full);

  }

  sleep(){
    let stat = this.health += _.random(1,5);
    if(this.health >= 100){this.health = 100;}
  }

  play(){
    let statM = this.mood += _.random(1,5);
    let statF = this.full -= _.random(1,3);
    let statH = this.health -= _.random(1,3);
    if(this.mood >= 100){this.mood = 100;}
  }

  update(){
    $(`div[data-name=${this.name}]`).find('.specs > .statusF').css('width', +this.full+'%');
    $(`div[data-name=${this.name}]`).find('.specs > .statusH').css('width', +this.health+'%');
    $(`div[data-name=${this.name}]`).find('.specs > .statusM').css('width', +this.mood+'%');
    // debugger;
    if(this.health <= 0 || this.full <=0){
      $(`div[data-name=${this.name}]`).find('.photo').css('background-image', 'url("../media/death.png")');
      // $(`div[data-name=${this.name}]`).find('.photo').css('background-image', 'none');
      // $(`div[data-name=${this.name}]`).css('background-color', 'white');

    }
  }

  render(){
    $('#pets').append(`<div data-name=${this.name}  class=pet>
                      <div class=photo style='background-image:url("${this.speciesImg}")'></div>
                    <div class=container>
                      <div class=name> ${this.name} </div>
                      <div class=species> ${this.species} </div>
                      <div class=age> ${this.age} years</div>
                      <div class=gender> ${this.gender} </div>
                    </div>
                    <div class=specs>
                      <img class=stats src='../media/health.jpg' style='float: left;'> <div class=statusH style='height: 15px; width: ${this.health}%; background-color: red;'></div>
                      <img class=stats src='../media/full.png' style='float: left;'> <div class=statusF style='height: 15px; width: ${this.full}%; background-color: white;'></div>
                      <img class=stats src='../media/mood.png' style='float: left;'><div class=statusM style='height: 15px; width: ${this.mood}%; background-color: yellow;'></div>
                    </div>
                  <div class=buttons>
                    <img class=health src='../media/sleep.png'>
                    <img class= eat src='../media/full.png'>
                    <img class=mood src='../media/mood.png'>
                  </div>
                        </div>`);
  }
}
