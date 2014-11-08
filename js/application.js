//
window.Todos = Ember.Application.create();
/* 使用localstorage*/
Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});

