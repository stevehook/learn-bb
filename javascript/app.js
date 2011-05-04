$(function() {
  window.Resource = Backbone.Model.extend({
  });

  window.ResourceList = Backbone.Collection.extend({
  });

  window.resources = new ResourceList;

  window.AppView = Backbone.View.extend({
    el: $('#app'),

    events: {
      "click .resourceLink": "loadResource"
    },

    initialize: function() {
      resources.fetch();
    },

    loadResource: function(e) {
      console.log('loadResource');
    }
  });

  window.app = new AppView;
});
