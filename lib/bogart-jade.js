var bogart = require('bogart'),
    jade = require('jade');

require('bogart').viewEngine.addEngine('jade', function(template, opts, cache, viewEngine) {
  var fn;
  var ads = 1212312;

  if (typeof template === "function") {
    fn = template;
  } else {
    fn = jade.compile(template, opts);
    cache(fn);
  }

  return fn(opts.locals);
});