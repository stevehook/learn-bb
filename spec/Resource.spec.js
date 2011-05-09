var jasmine = require('jasmine-node');
require('../lib/jquery-1.4.2.js');
require('../lib/json2.js');
require('../lib/underscore-1.1.3.js');
require('../lib/backbone.js');
require('../lib/app.js');

describe("Resource model", function() {
  
  beforeEach(function() {
    this.resource = new Resource({
      url:'test/url'
    });
    var collection = {
    };
    this.todo.collection = collection;
  });

  describe("when instantiated", function() {

    it("should set the resource property", function() {
      expect(this.resource.get("url")).toEqual('test/url');
      console.log('In test');
    });

  });

});

console.log('Hello');

// jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
jasmine.getEnv().execute();

