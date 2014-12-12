'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.register = (req, res)=>{
  res.render('users/register', {title: 'Register'});
};

exports.validate = (req, res)=>{
  console.log(req.body);
  User.create(req.body, user=>{
    if(user){
      res.redirect('/'); //could redirect to error page..this is the quick way
    }else{
      res.redirect('/register');
    }
  });
};

exports.verify = (req, res)=>{
  User.findById(req.params.userId, user=>{
    res.render('users/verify', {user: user, title: 'Title'});

  });
};

exports.login = (req, res)=>{
  User.login(req.body, user=>{
    if(user){
      req.session.userId = user._id;
    }else{
      req.session = null;
    }
    console.log(user);
    res.redirect('/');
  });

};

exports.loginPage = (req, res)=>{
  res.render('home/login', {title: 'Login'});
};

exports.logout = (req, res)=>{
  req.session = null;
  res.redirect('/');
};

exports.verified = (req, res)=>{
  User.findById(req.params.userId, u=>{
    u.verify(req.body.password, ()=>{
      res.redirect('/login');
      });
    });
  };

exports.lookup = (req, res, next)=>{
  console.log('IN LOOKUP');
  console.log(req.session.userId);
  User.findById(req.session.userId, user=>{
    console.log(user);
    if(user){
      res.locals.user = user;
    }else{
      res.locals.user = null;
    }
    next();
  });
};

exports.bounce = (req, res, next)=>{
  if(res.locals.user){
    next();
  }else{
    res.redirect('/');
  }
};
