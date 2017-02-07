// Listing 1-3. Ember.js TodosListController

(function () {
    'use strict';

    Todos.TodoListController = Ember.ArrayController.extend({
	needs: ['todos'],
	allTodos: Ember.compute.alias('controllers.todos'),
	itemController: 'todo',
	canToggle: function () {
	    var anyTodos = this.get('allTodos.length');
	    var isEditing = this.isAny('isEditing');

	    return anyTodos && !isEditing;
	}.property('allTodos.length', '@each.isEditing')
    });
})();
