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
      resources.fetch();
      console.log(resources);
    },

    loadResource: function(e) {
      console.log('loadResource');
    }
  });

  window.app = new AppView;
});
