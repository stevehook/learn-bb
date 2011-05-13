$(function() {

  window.ResourceView = Backbone.View.extend({
    initialize: function(resource) {
      _.bindAll(this, 'refreshResource');
      this.resource = resource;
      resource.bind('change', this.refreshResource);
    },

    refreshResource: function() {
      console.log('refreshResource');
      $('#docTitle').html(this.resource.get('name'));
      $('#docContent').html(this.resource.get('data'));
    }
  });
});
