var j5 = require('johnny-five'); //module that talks to arduino
var Pin = j5.Pin;

var board = new j5.Board();
board.on('ready', function(){
  console.log('board is ready');

  this.pinMode(13, Pin.OUTPUT);

  var voltage = 0;

  this.loop(500, function(){
    voltage = voltage ? 0 : 1;
    this.digitalWrite(13, voltage);
  });

});
