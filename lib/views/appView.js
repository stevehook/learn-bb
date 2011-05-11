$(function() {
  window.resources = new ResourceList;

  window.AppView = Backbone.View.extend({
    el: $('#app'),

    initialize: function() {
      _.bindAll(this, 'addResource', 'refreshResources', 'loadResource');
      resources.bind('add', this.addResource);
      resources.bind('refresh', this.refreshResources);
      resources.fetch();
    },

    addResource: function(resource) {
      console.log('addResource');
      // TODO: Refactor this to a template or different view
      var html = "<li class='resourceLink'><a href='#" + resource.get('url') + "'>" + resource.get('name') + "</a></li>";
      this.$("#resourceList").append(html);
    },

    refreshResources: function() {
      resources.each(this.addResource);
    }
  });
});
