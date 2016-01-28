var express = require('express');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var uuid = require('node-uuid');
var models  = require('../models');

var salt = bcrypt.genSaltSync(10);

module.exports = function(app) {

  app.post('/api/login', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
  	models.User.findOne({
  		where: {
  			email: req.body.email
  		}
  	}).then(function(user) {
  		if(user) {
  			bcrypt.compare(req.body.password, user.password, function(err, match) {
  				if(match) {
            var token = jwt.sign(user.dataValues, '12345');
            res.json({token: token});
  				}
  				else {
  					res.status(500).send({ error: 'Invalid Username or Password' });
  				}
  			});
  		} else {
  			    res.status(500).send({ error: 'Invalid Username or Password' });
  		}
  	});
  });

  app.post('/api/signup', function(req, res) {
    var uid = uuid.v4();
  	var passhash = bcrypt.hashSync(req.body.password, salt);
    models.User.findOrCreate({
  		where: {
  			email: req.body.email,
        name: req.body.username
  		},
  		defaults: {
  			uuid: uid,
  			name: req.body.username,
  			fullName: req.body.fullName,
  			password: passhash,
  		}
    }).spread(function(user, created) {
        console.log(user.get({
          plain: true
        }));
        console.log(created)
        if(!created) {
          res.status(500).send({error: 'Username or Email already Taken'});
        }
        res.send(user);
      });
  });
}
