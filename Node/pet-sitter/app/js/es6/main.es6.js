/* global Pet, pets */
/* jshint unused: false*/

(function(){
  'use strict';


  $(document).ready(init);

  function init () {
  $('#add').click(add);
  $('#pets').on('click', '.eat', eat);
  $('#pets').on('click', '.health', sleep);
  $('#pets').on('click', '.mood', play);
  }

  function eat(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.eat();
    pet.update();
  }

  function sleep(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }

  function play(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.play();
    pet.update();
  }

  function add(){
    var gender = $('#gender').val();
    var speciesImg = $('#species').val();
    var species = $('#species option:selected').text();
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;

  let pet = new Pet(species, speciesImg, gender, age, name);
  pets.push(pet);

  pet.render();
}
})();
