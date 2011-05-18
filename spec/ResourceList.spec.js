require('./initialise-jsdom.js');
require('../lib/models/resource.js');
require('../lib/collections/resourceList.js');

describe("ResourceList collection", function() {

  beforeEach(function() {
    this.collection = new window.ResourceList;
  });

  describe("when instantiated", function() {

    it("should set the url property", function() {
      expect(this.collection.url).toEqual('resources');
    });

  });

});

