$(function() {
  window.Resource = Backbone.Model.extend({
    url: function() {
      this.get('url');
    }
  });
});

