if (!global.window) {
  var jsdom = require('jsdom').jsdom;
  var w = jsdom('<html><head></head><body></body></html>').createWindow();
  for (var key in w) {
    global[key] = w[key];
  }
  global.window = global;

  require('../lib/jquery-1.4.2.js');
  require('../lib/json2.js');
  global['sinon'] = require('sinon');
  global['_'] = require('../lib/underscore-1.1.3.js');
  global['Backbone'] = require('../lib/backbone.js');
}

