require('./initialise-jsdom.js');
require('../lib/models/resource.js');
require('../lib/collections/resourceList.js');

describe("Resource model", function() {

  beforeEach(function() {
    this.resource = new window.Resource({
      id: 37,
      name: 'Document 1',
      data: 'bla blah'
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

    it("the url function should return the correct address", function() {
      expect(this.resource.url()).toEqual('resources/37');
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

    it("should be new", function() {
      expect(this.resource.isNew()).toEqual(true);
    });

    it("the url function should return the correct address", function() {
      expect(this.resource.url()).toEqual('resources');
    });
  });

});
