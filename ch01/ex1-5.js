// Listing 1-5. Todo Controller for AngularJS

angular.module('todomvc')
    .controller('TodoCtrl', function TodoCtrl($scope, $routeParams, $filter, store) {
	/* omitted */
	$scope.addTodo = function () {
	    var newTodo = {
		title: $scope.newTodo.trim(),
		completed: false
	    };

	    if (!newTodo.title) {
		return;
	    }

	    $scope.saving = true;
	    store.insert(newTodo)
		.then(function success() {
		    $scope.newTodo = '';
		})
		.finally(function () {
		    $scope.saving = false;
		});
	};
	/* omitted */

    });
