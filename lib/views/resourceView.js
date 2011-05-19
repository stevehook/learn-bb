$(function() {

  window.ResourceView = Backbone.View.extend({
    events: {
      "dblclick #docTitle"           : "editTitle"
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

    editTitle: function() {
      console.log('editTitle');
    }
  });
});
