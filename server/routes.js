var express = require('express');
var jwt = require('jsonwebtoken');

module.exports = function(app) {
var secret = '123456';

  app.post('/api/authenticate', function(req, res) {
    var secret = '123456';
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

}
