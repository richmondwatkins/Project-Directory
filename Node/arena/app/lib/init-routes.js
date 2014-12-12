'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var users = traceur.require(__dirname + '/../routes/users.js');
  var games = traceur.require(__dirname + '/../routes/games.js');

  app.all('*', users.lookup);
  app.get('/', dbg, home.index);

  app.post('/register', dbg, users.validate);
  app.get('/register', dbg, users.register);

  app.get('/verify/:userId', dbg, users.verify);
  app.post('/verify/:userId', dbg, users.verified);

  app.post('/login', dbg, users.login);
  app.get('/login', dbg, users.loginPage);

  app.get('/logout', dbg, users.logout);

  app.all('*', users.bounce);
  app.get('/play', dbg, games.play);
  console.log('Routes Loaded');
  fn();
}
