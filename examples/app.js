/**
 * Bogart Jade View Engine Example.
 *
 * In order for this example to work, bogart-jade must be installed.
 * npm install bogart-jade
 */

var bogart = require('bogart')
  , path   = require('path');

// This will register the 'jade' view engine behind the scenes.
require('../lib/bogart-jade');

// Construct a Bogart ViewEngine using the Jade.
var viewEngine = bogart.viewEngine('jade');

var router = bogart.router();
router.get('/', function(req) {
  return viewEngine.respond('index.jade', { locals: { description: 'This is content' } });
});

var app = bogart.app();

// Add middleware to trap and display errors.
app.use(bogart.middleware.error);

// Add our router to the application stack. It is important that this be done after 
// adding bogart.batteries so that batteries is ahead of router in the middleware 
// chain.
app.use(router);

app.start();
