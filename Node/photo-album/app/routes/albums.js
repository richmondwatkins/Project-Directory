'use strict';

var multiparty= require('multiparty');
var albums = global.nss.db.collection('albums'); //collection
var fs = require('fs');
var Mongo = require('mongodb');

exports.index = (req, res)=>{
  albums.find().toArray((e,r)=>{
    res.render('albums/index', {albums: r, title: 'Photos'});
  });


};

exports.show = (req, res)=>{
  var _id = Mongo.ObjectID(req.params.id);


  albums.findOne({_id:_id},(e,album)=>{
    res.render('albums/show', {album: album, title: 'Album Show'});
  });
};
exports.create = (req,res)=>{
  var form = new multiparty.Form();

  form.parse(req, (err, fields, files)=>{
    var album = {};
    album.title = fields.title[0];
    album.date = new Date(fields.date[0]);
    album.photos = [];

    files.photos.forEach(p=>{

      fs.renameSync(p.path, `${__dirname}/../static/img/${p.originalFilename}`);

      album.photos.push(p.originalFilename);
    });

    albums.save(album, ()=>res.redirect('/albums'));

    console.log('xxxxxxxxxx');
    console.log(files);

  });
};
