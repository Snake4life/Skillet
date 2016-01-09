
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var app = express();

//Secret TOKEN!!!!
var secret = '123456';

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', expressJwt({secret: secret}));


app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

app.post('/authenticate', function(req, res) {
  if (!(req.body.username === 'john.doe' && req.body.password === 'foobar')) {
    res.state(401).send('Wrong user or password');
    return;
  }

  var profile = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@doe.com',
  id: 123
};
  var token = jwt.sign(profile, secret);
  res.json({ token: token});
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
