$(function() {
  window.Resource = Backbone.Model.extend({
    defaults: {
      name: '',
      data: ''
    },

    elementID: function() {
      return 'resource' + this.get('id');
    },

    url: function() {
      var base = 'resources';
      return this.isNew() ? base : base + '/' + this.id;
    }
  });
});

