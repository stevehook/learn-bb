$(function() {
  window.Resource = Backbone.Model.extend({
  });

  window.ResourceList = Backbone.Collection.extend({
    url: 'data/index.json'
  });

  window.resources = new ResourceList;

  window.AppView = Backbone.View.extend({
    el: $('#app'),

    routes: {
      "data/:fileName": "loadResource"
    },

    initialize: function() {
      _.bindAll(this, 'addResource', 'refreshResources', 'loadResource');
      this.bind('route:loadResource', this.loadResource);
      resources.bind('add', this.addResource);
      resources.bind('refresh', this.refreshResources);
      resources.fetch();
    },

    loadResource: function(fileName) {
      // TODO: Navigate to the new url (as a hashbang)
      console.log(fileName);
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

  window.app = new AppView;
});
