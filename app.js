
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger());
  app.use(express.errorHandler({
  	dumpExceptions:true, showStack:true
  }));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/static'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes


var projects = require('./goalpep.js');

app.get('/', function(req, res){
  res.render('index', {
	locals: {projects: projects.all, title: "GoalPep!"}
	})});


// Only listen on $ node app.js

if (!module.parent) {
  app.listen(80);
}

