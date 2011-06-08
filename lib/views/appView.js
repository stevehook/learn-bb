$(function() {
  window.resources = new ResourceList;

  window.AppView = Backbone.View.extend({
    el: $('#app'),

    resourceTemplate: _.template($('#resourceTemplate').html()),

    initialize: function() {
      _.bindAll(this, 'addResource', 'refreshResources', 'loadResource', 'changeResources');
      resources.bind('add', this.addResource);
      resources.bind('change', this.changeResources);
      resources.bind('remove', this.removeResource);
      resources.bind('refresh', this.refreshResources);
      resources.fetch();
    },

    addResource: function(resource) {
      console.log(resource);
      console.log(resource.elementID);
      var html = this.resourceTemplate({ id: resource.elementID(), url: resource.url(), name: resource.get('name') });
      this.$("#resourceList").append(html);
    },

    refreshResources: function() {
      resources.each(this.addResource);
      Backbone.history.start()
    },

    changeResources: function() {
      this.$("#resourceList").html('');
      resources.each(this.addResource);
    },

    removeResource: function(models) {
      console.log(models);
      console.log('remove resource event handler');
    }
  });
});
