var bogart = require('bogart')
  , crypto = require('crypto')
  , jade   = require('jade');

var cache = {};

require('bogart').viewEngine.addEngine('jade', function(str, opts) {
  var shasum = crypto.createHash('sha1')
    , digest;

  shasum.update(str);

  digest = shasum.digest('hex');

  if (cache[digest]) {
    return cache[digest](opts.locals);
  }

  var fn = jade.compile(str, opts);
  cache[digest] = fn;
  
  return fn(opts.locals);
});