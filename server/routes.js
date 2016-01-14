var express = require('express');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var pg = require('pg');
var config = require('../config.js');

var secret = '123456';
var salt = bcrypt.genSaltSync(10);
var database = config.database;

module.exports = function(app) {


  app.post('/api/authenticate', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if (!(username === 'john.doe@gmail.com' && password === 'foobar')) {
      res.send('Wrong user or password');
      return;
    }

    var profile = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@doe.com',
      id: '123'
    };
  var token = jwt.sign(profile, '12345');
  res.json({ token: token });
});

  app.post('/api/register', function(req, res) {

    bcrypt.hash("my password", salt, function(err, hash) {
        // Store hash in your password DB.
    });
  })

}
