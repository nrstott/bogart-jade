var bogart = require('bogart')
  , when   = require('promised-io/lib/promise').when
  , assert = require('assert')
  , path   = require('path');

require('../lib/bogart-jade');

exports['test render jade'] = function(beforeExit) {
  var viewEngine = bogart.viewEngine('jade', path.join(__dirname, 'fixtures'))
    , renderedText;
  
  when(viewEngine.render('index.jade', { layout: false }), function(str) {
    renderedText = str;
  });

  beforeExit(function() {
    assert.equal(renderedText, '<h1>Hello World from Jade</h1>');
  });
}