
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();
//var io = require('socket.io').listen(app);

// all environments
app.set('port', process.env.PORT || 5000); //3000
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { pretty: true });
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('findbyco'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.locals.pretty = true;

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Rutas peligrosas :)
app.get('/', function(request, response) {
	response.render('index', {
    title: 'Home'
  });
});
app.get('/d', function(request, response) {
	response.render('detail', {
    title: 'D'
  });
});
app.get('/d/:id', function(request, response) {
	var id = req.params.id;
	response.render('detail', {
    title: 'Ads'
  });
});
app.get('/nearby/:user', function(request, response) {
  var id = req.params.id;
  response.render('detail', {
    title: 'Ads near by {location}'
  });
});
app.get('/explorer', function(request, response) {
  response.render('map', {
    title: 'Explorer the World'
  });
});
app.get('/login', function(request, response) {
  response.render('login', {
    title: 'Login'
  });
});
app.get('/profile', function(request, response) {
  response.render('profile', {
    title: 'User profile'
  });
});
app.get('/add', function(request, response) {
  response.render('add', {
    title: 'New'
  });
});
app.get('/edit/:id', function(request, response) {
  response.render('edit', {
    title: 'Edit'
  });
});
app.get('/delete/:id', function(request, response) {
  response.render('delete', {
    title: 'Delete'
  });
});
/*
app.get('/signin', function(request, response) {
  response.render('signin', {
    title: 'Login',
    username: 'DANIEL'
  });
});
*/


// Runserver :)
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port') + '. Use Control + C to stop Node Server');
});


