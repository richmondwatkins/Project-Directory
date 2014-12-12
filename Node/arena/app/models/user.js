'use strict';
var request = require('request');
var userCollection = global.nss.db.collection('users');
var Mongo = require('mongodb');
var bcrypt = require('bcrypt');
var _ = require('lodash');


class User{
  static create(obj, fn){
    userCollection.findOne({email: obj.email}, (e, u)=>{
      if(u){
        fn(null);
      }else{
        var user = new User();
        user.email = obj.email;
        user.password = '';
        user.isValid = false;

        userCollection.save(user, ()=>{
          sendVerifyEmail(user, fn);
        });
      }
    });
  }

   verify(password, fn){
    this.isValid = true;
    this.password = bcrypt.hashSync(password, 8);
    userCollection.save(this, fn);
  }


  static findById(obj, fn){
    var id = Mongo.ObjectID(obj);
    userCollection.findOne({_id: id}, (e, u)=>{
      u = _.create(User.prototype, u);
      fn(u);
    });
  }

  static login(obj, fn){
    userCollection.findOne({email: obj.email, isValid: true}, (err, user)=>{
      var isMatch = bcrypt.compareSync(obj.password, user.password);
      if(isMatch){
        fn(user);
      } else {
        fn(null);
      }
    });
  }


}





function sendVerifyEmail(user, fn){
  console.log('INSIDE VERIFY EMAIL');
  console.log(user);
  // if(data.to.match(/@nomail.com/g)){fn(); return;} //was used to test email functionality

  var key = process.env.MAILGUN;
  var url = 'https://api:' + key + '@api.mailgun.net/v2/sandbox33155c852ea04633b9443071d32e7466.mailgun.org/messages';
  var post = request.post(url, function(err, response, body){
    console.log('SENDING MESSSAGE');
    console.log(body);
    fn(user);
  });

  var form = post.form();
  form.append('from', 'admin@arena.com');
  form.append('to', user.email);
  form.append('subject', 'Please verify your email address on ARENA');
  form.append('html', `<a href="http://localhost:4000/verify/${user._id}">Click to Verify</a>`);
}


module.exports = User;
