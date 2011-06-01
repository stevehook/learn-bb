$(function() {
  window.resources = new ResourceList;

  window.AppView = Backbone.View.extend({
    el: $('#app'),

    initialize: function() {
      _.bindAll(this, 'addResource', 'refreshResources', 'loadResource', 'changeResources');
      resources.bind('add', this.addResource);
      resources.bind('change', this.changeResources);
      resources.bind('refresh', this.refreshResources);
      resources.fetch();
    },

    addResource: function(resource) {
      // TODO: Refactor this to precompiled template
      var html = _.template(
        "<li class='resourceLink'><a href='#<%=url%>'><%=name%></a></li>",
        { url: resource.url(), name: resource.get('name') });
      this.$("#resourceList").append(html);
    },

    refreshResources: function() {
      resources.each(this.addResource);
      Backbone.history.start()
    },

    changeResources: function() {
      this.$("#resourceList").html('');
      resources.each(this.addResource);
    }
  });
});
