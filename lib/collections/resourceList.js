$(function() {
  window.ResourceList = Backbone.Collection.extend({
    url: 'resources',

    comparator: function(resource) {
      return resource.id;
    }
  });
});
