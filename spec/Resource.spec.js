// Bootstrap jsdom (from jsdom-hooks.js')
if (!global.window) {
  var jsdom = require('jsdom').jsdom;
  var w = jsdom('<html><head></head><body></body></html>').createWindow();
  for (var key in w) {
    global[key] = w[key];
  }
  global.window = global;

  require('../lib/jquery-1.4.2.js');
  require('../lib/json2.js');
  global['_'] = require('../lib/underscore-1.1.3.js');
  global['Backbone'] = require('../lib/backbone.js');
}

require('../lib/models/resource.js');
require('../lib/collections/resourceList.js');

describe("Resource model", function() {
 
  beforeEach(function() {
    this.resource = new window.Resource({
      url:'test/url'
    });
    var collection = {
    };
    this.resource.collection = collection;
  });

  describe("when instantiated", function() {

    it("should set the resource property", function() {
      expect(this.resource.get("url")).toEqual('test/url');
      console.log('In test');
    });

  });

});
