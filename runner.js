var path = require('path');
var fs   = require('fs');
var lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
require.paths.push(lib);

// require('jasmine-node');
require('jasmine-node/lib/jasmine-node/cli.js');

