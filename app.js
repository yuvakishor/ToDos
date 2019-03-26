var app = angular.module('todoApp', [])

app.controller('TodoListController', ['$scope', function($scope) {
    $scope.todos = [];
    $scope.newField = [];
    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.todoText, done:false, editing: false});
        $scope.todoText = '';
    };
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
          return count;
        };
    $scope.delete = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
           if (!todo.done) $scope.todos.push(todo);
        });
    };
    $scope.remove = function(){
        $scope.todos.splice(this.$index, 1);
    };
    $scope.change = function(field){
        var todoIndex = $scope.todos.indexOf(field);
        $scope.newField[todoIndex] = angular.copy(field);
        $scope.todos[todoIndex].editing = true;
    }
    $scope.save = function(index) {
      $scope.todos[index].editing = false;
    };
    $scope.cancel = function(index) {
        $scope.todos[index] = $scope.newField[index];      
    };
}]);