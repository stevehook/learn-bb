$(function() {

  window.ResourceView = Backbone.View.extend({
    events: {
      "blur #docTitle"               : "changeTitle",
      "blur #docContent"             : "changeContent"
      // "dblclick #docContent"      : "editContent",
      // "keypress #docTitle"        : "updateOnEnter"
    },

    initialize: function() {
      this.el = $('#doc')[0];
      _.bindAll(this, 'refreshResource', 'editTitle');
      this.model.bind('change', this.refreshResource);
    },

    refreshResource: function() {
      $('#docTitle').html(this.model.get('name'));
      $('#docContent').html(this.model.get('data'));
    },

    changeTitle: function() {
      this.model.set({'name': $('#docTitle').text() });
      this.model.save();
    },

    changeContent: function() {
      this.model.set({'data': $('#docContent').text() });
      this.model.save();
    }
  });
});
