/* global moment: true */

(function() {
  'use strict';


  $(document).ready(init);


  function init(){
      $('#format').click(format);
      var frmt = moment().format('MMMM Do YYYY, h:mm:ss a');
      $('#output').text(frmt);

  }


  function format() {
  var date =  $('#date').val();
  console.log(date);

  }




})();
