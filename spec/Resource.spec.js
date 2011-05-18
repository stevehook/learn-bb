require('./initialise-jsdom.js');
require('../lib/models/resource.js');
require('../lib/collections/resourceList.js');

describe("Resource model", function() {

  beforeEach(function() {
    this.resource = new window.Resource({
      id: 37,
      name: 'Document 1',
      data: 'bla blah',
      url:'test/url'
    });
    var collection = {
    };
    this.resource.collection = collection;
  });

  describe("when instantiated", function() {

    it("should set the id property", function() {
      expect(this.resource.get("id")).toEqual(37);
    });

    it("should set the name property", function() {
      expect(this.resource.get("name")).toEqual('Document 1');
    });

    it("should set the data property", function() {
      expect(this.resource.get("data")).toEqual('bla blah');
    });

    it("should set the url property", function() {
      expect(this.resource.get("url")).toEqual('test/url');
    });

  });

});

describe("Resource model", function() {

  beforeEach(function() {
    this.resource = new window.Resource;
    var collection = {};
    this.resource.collection = collection;
  });

  describe("when instantiated with defaults", function() {

    it("should set the name property", function() {
      expect(this.resource.get("name")).toEqual('New Document');
    });

    it("should set the data property", function() {
      expect(this.resource.get("data")).toEqual('');
    });

  });

});
