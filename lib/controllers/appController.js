$(function() {
  window.AppController = Backbone.Controller.extend({
    routes: {
      "data/:fileName.json": "loadResource"
    },

    initialize: function() {
    },

    loadResource: function(fileName) {
      // TODO: Create a new ResourceView and load the Resource model based on the URL
      var resource = new Resource();
      resource.url = "resources/" + fileName;
      var view = new ResourceView(resource);
      resource.fetch();
    }
  });
});
