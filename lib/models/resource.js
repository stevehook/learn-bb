$(function() {
  window.Resource = Backbone.Model.extend({
    defaults: {
      name: 'New Document',
      content: ''
    }
  });
});

