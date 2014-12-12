var j5 = require('johnny-five'); //module that talks to arduino
var Pin = j5.Pin;

var board = new j5.Board();
board.on('ready', function(){
  console.log('board is ready');
  this.pinMode(0, Pin.ANALOG);
  this.pinMode(3, Pin.OUTPUT);
  this.pinMode(4, Pin.OUTPUT);

  this.analogRead(0, function(v){

    if(v < 500){
      this.digitalWrite(3, 1);
      this.digitalWrite(4, 0);

    }else {
      this.digitalWrite(3, 0);
      this.digitalWrite(4, 1);

    }
    console.log(v);
  });
});
