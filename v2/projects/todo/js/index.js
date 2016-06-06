var App = angular.module('Todo', []);

// MAIN TODO CONTROLLER
App.controller("TodoCtrl", function($scope) {
  $scope.todos = []; 
  $scope.alert = ""; 
  $scope.complete = [];
  
  // ADD TODO FUNCTION
  $scope.add = function() {
    if($scope.todo) {
      $scope.todos.push({ 
        body: $scope.todo,
        checked: false
      });
      $scope.todo = "";
      $scope.alert = "";
    }else{
      $scope.alert = "Can't be blank...";
    }
  }
  // DELETE TODO FUNCTION
  $scope.delete = function(todo) {
    $scope.todos.splice($scope.todos.indexOf(todo), 1); 
    $scope.alert = "Todo successfully removed...";
  }
  // PUT LINE THROUGH TODO WHEN CHECKED
  $scope.checked = function(todo) {
     todo.checked = !todo.checked;
     
  }
  $scope.clear = function() {
    $scope.complete = [];
    $scope.alert = "Selected todos were cleared...";
  }
  
  $scope.completed = function(todo) {
    $scope.complete.push(todo);
    $scope.todos.splice($scope.todos.indexOf(todo), 1);
  }
  
  $scope.undo = function(todo) {
    $scope.todos.push(todo);
    $scope.complete.splice($scope.complete.indexOf(todo), 1);
  }
});