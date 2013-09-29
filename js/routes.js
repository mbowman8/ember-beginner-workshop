App.Router.map(function() {
  this.resource('stories', function() {
    this.route('view', { path: ':story_id'});
    this.route('edit', { path: ':story_id/edit'});
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(params) {
    this.transitionTo("stories");
  }
});

App.StoriesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get("store").findAll("story");
  }
});

App.StoriesBaseRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").find('story', params.story_id);
  }
});
App.StoriesViewRoute = App.StoriesBaseRoute.extend();
App.StoriesEditRoute = App.StoriesBaseRoute.extend();


