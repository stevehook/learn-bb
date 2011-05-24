$(function() {
  window.AppController = Backbone.Controller.extend({
    routes: {
      "resources/new": "newResource",
      "resources/:id": "loadResource"
    },

    initialize: function() {
    },

    loadResource: function(id) {
      // TODO: Create a new ResourceView and load the Resource model based on the URL
      var resource = window.resources.get(id);
      resource.url = "resources/" + id;
      var view = new ResourceView({ model: resource, el: $('#doc')[0]});
      resource.fetch();
    },

    newResource: function() {
      console.log('newResource');
      var resource = new Resource();
      resource.url = "resources/create";
      var view = new ResourceView({ model: resource, el: $('#doc')[0]});
      view.refreshResource();
    }
  });
});
