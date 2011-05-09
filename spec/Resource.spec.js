var jasmine = require('jasmine-node');

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

