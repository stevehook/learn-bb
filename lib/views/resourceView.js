$(function() {

  window.ResourceView = Backbone.View.extend({
    events: {
      "blur #docTitle"               : "changeTitle"
      // "dblclick #docContent"      : "editContent",
      // "blur #docTitle"            : "updateTitle",
      // "blur #docContent"          : "updateContent",
      // "keypress #docTitle"        : "updateOnEnter"
    },

    initialize: function() {
      this.el = $('#doc')[0];
      // console.log(this.el.id);
      // console.log('ResourceView initialize');
      _.bindAll(this, 'refreshResource', 'editTitle');
      this.model.bind('change', this.refreshResource);
    },

    refreshResource: function() {
      $('#docTitle').html(this.model.get('name'));
      $('#docContent').html(this.model.get('data'));
    },

    changeTitle: function() {
      console.log('changeTitle');
    }
  });
});
