$(function() {
  window.Resource = Backbone.Model.extend({
  });

  window.ResourceList = Backbone.Collection.extend({
    url: 'data/index.json'
  });

  window.resources = new ResourceList;

  window.AppView = Backbone.View.extend({
    el: $('#app'),

    events: {
      "click .resourceLink": "loadResource"
    },

    initialize: function() {
      _.bindAll(this, 'addResource', 'refreshResources', 'loadResource');
      resources.bind('add', this.addResource);
      resources.bind('refresh', this.refreshResources);
      resources.fetch();
    },

    loadResource: function(e) {
      console.log('loadResource');
    },

    addResource: function() {
      console.log('addResource');
      // TODO: Insert a row into the list of resources in the leftSide panel
    },

    refreshResources: function() {
      resources.each(this.addResource);
    }
  });

  window.app = new AppView;
});
