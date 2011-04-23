
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

function getDescription(input) {
	return "<p>" + input.name + "<br>" + input.date + "<br>";
}

app.get('/', function(req,res) {
	var i; 
		var out="";
		for (i = 0; i < projects.length; i += 1) {
			out += getDescription(projects[i]);
		};
	
	res.render('index', {locals:
	{
		output: out,
		title: "GoalPep!"
	}})});

	
app.get('/:id', function(req, res) {
	var out = getDescription(projects[req.params.id]);
	res.render('index', {locals: 
		{
		output: out,
		title: "GoalPep!"
		}
	})
});


// Only listen on $ node app.js

if (!module.parent) {
  app.listen(80);
}

