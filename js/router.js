/* map*/
Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes will go here later
    this.route('active');
    this.route('completed');
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
/** 
 * TodosActiveRoute
 * 未完成项路由
 */
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
/** 
 * TodosCompletedRoute
 * 已完成项路由
 */
Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});


