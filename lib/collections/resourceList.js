$(function() {
  window.ResourceList = Backbone.Collection.extend({
    url: 'resources',

    model: window.Resource,

    comparator: function(resource) {
      return resource.id;
    }
  });
});
