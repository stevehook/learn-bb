$(function() {

  window.ResourceView = Backbone.View.extend({
    events: {
      "blur #docTitle"   : "changeTitle",
      "blur #docContent" : "changeContent"
    },

    resourceTemplate: _.template($('#resourceDetailTemplate').html()),

    initialize: function() {
      this.el = $('#doc')[0];
      _.bindAll(this, 'refreshResource', 'editTitle');
      if (this.model) { this.model.bind('change', this.refreshResource); }
    },

    refreshResource: function() {
      var html = this.resourceTemplate({name: this.model.get('name'), data: this.model.get('data')});
      $('#doc').html(html);
    },

    changeTitle: function() {
      this.model.set({'name': $('#docTitle').text() });
      if (this.model.isNew() && this.model.get('name') === this.model.defaults.name) { 
        window.appController.saveLocation('');
        window.appController.clear();
        return;
      }
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
