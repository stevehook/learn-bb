$(function() {

  window.ResourceView = Backbone.View.extend({
    events: {
      "blur #docTitle"   : "changeTitle",
      "blur #docContent" : "changeContent"
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
      if (this.model.isNew() && this.model.get('name') === this.model.defaults.name) { 
        window.appController.saveLocation('');
        return;
      }
      this.model.set({'name': $('#docTitle').text() });
      this.model.save(null, { success: this.afterSave });
    },

    changeContent: function() {
      this.model.set({'data': $('#docContent').text() });
      this.model.save(null, { success: this.afterSave });
    },

    afterSave: function(model) {
      if (!window.resources.get(model.id)) {
        window.resources.add(model);
        window.appController.saveLocation(model.url());
      }
    },

    editTitle: function () {
      $('#docTitle').focus();
    }
  });
});
