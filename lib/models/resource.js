$(function() {
  window.Resource = Backbone.Model.extend({
    defaults: {
      name: '',
      data: ''
    },

    url: function() {
      var base = 'resources';
      return this.isNew() ? base : base + '/' + this.id;
    }
  });
});

