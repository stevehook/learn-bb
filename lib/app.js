$(function() {
  window.Resource = Backbone.Model.extend({
    url: function() {
      this.get('url');
    }
  });

  window.ResourceList = Backbone.Collection.extend({
    url: 'data/index.json'
  });

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

  window.ResourceView = Backbone.View.extend({
    initialize: function(resource) {
      _.bindAll(this, 'refreshResource');
      this.resource = resource;
      resource.bind('change', this.refreshResource);
    },

    refreshResource: function() {
      console.log('refreshResource');
      $('#doc').html(this.resource.get('data'));
    }
  });

  window.AppController = Backbone.Controller.extend({
    routes: {
      "data/:fileName.json": "loadResource"
    },

    initialize: function() {
    },

    loadResource: function(fileName) {
      // TODO: Create a new ResourceView and load the Resource model based on the URL
      var resource = new Resource();
      resource.url = 'data/' + fileName + '.json';
      var view = new ResourceView(resource);
      resource.fetch();
    }
  });

  window.app = new AppView;
  window.appController = new AppController;
  Backbone.history.start()
});
