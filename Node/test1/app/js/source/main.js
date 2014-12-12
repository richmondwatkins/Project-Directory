(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#colorize').click(capture);
  }


  function capture(){
    var value = $('#input').val();
    console.log(value);
    var array = value.split(',');
    console.log(array);
    for (var j = 0; j < array.length; j++){
         var $div = $('<div>');

         $div.css('background-color', div[j]);
         $div.text(array[i].length);
         $('#box').append($div);






    }

  }


})();
