$(function() {
  window.AppController = Backbone.Controller.extend({
    routes: {
      "": "clear",
      "resources/new": "newResource",
      "resources/:id": "loadResource",
      "resources/:id/delete": "deleteResource"
    },

    initialize: function() {
    },

    loadResource: function(id) {
      // TODO: Create a new ResourceView and load the Resource model based on the URL
      var resource = window.resources.get(id);
      // TODO: Handle the case of missing resource
      var view = new ResourceView({ model: resource, el: $('#doc')[0]});
      resource.fetch({ success: function(model) {
        view.refreshResource();
      } });
    },

    newResource: function() {
      var resource = new Resource();
      var view = new ResourceView({ model: resource, el: $('#doc')[0]});
      view.refreshResource();
      view.editTitle();
    },

    clear: function() {
      var view = new ResourceView({ el: $('#doc')[0]});
      view.refreshResource();
    },

    deleteResource: function(id) {
      var resource = window.resources.get(id);
      if (resource) {
        resource.destroy({success: function() {
          // Change the hash back to the original hash if a document other than the one deleted is being displayed.
          window.resources.remove(resource);
          window.location.hash = '';
        }});
      }
    }
  });
});
