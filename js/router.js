/* map*/
Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes will go here later
    this.route('active');
  });

});
/* TodosRoute*/
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
/* TodosIndexRoute*/
Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
  	/* 调用todos路由的model*/
    return this.modelFor('todos');
  }
});
/* TodosActiveRoute*/
Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

