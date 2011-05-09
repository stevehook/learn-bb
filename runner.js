var path = require('path');
var fs   = require('fs');
var lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
require.paths.push(lib);

require('jasmine-node');
require('C:/Program Files (x86)/node-0.4.5-cygwin/lib/node/.npm/jasmine-node/1.0.6/package/lib/jasmine-node/cli.js');

