/**
 * 
 */

todoApp =angular.module('todoApp', []);

todoApp.controller('TodoListController', function($scope) {
    //var todoList = this;
    //$scope.todoList.todos = [
    //  {text:'learn AngularJS', done:true},
   //   {text:'build an AngularJS app', done:false}];
 
  //  $scope.todoList.addTodo = function($scope) {
//	     $scope.todoList.todos.push({text:todoList.todoText, done:false});
	     $scope.todoList.todoText = '';
 //   };
 
   // $scope.remaining = "2";
 /***
    $scope.todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      //return $scope.count;
      return 2;
    };
 ***/
  //  $scope.todoList.archive = function() {
  //    var oldTodos = todoList.todos;
  //    todoList.todos = [];
  //    angular.forEach(oldTodos, function(todo) {
  //      if (!todo.done) todoList.todos.push(todo);
  //    });
   // };
  });


   myApp = angular.module('myApp', []);
   myApp.controller('personController', function($scope){
		  
		  
	$scope.firstName= "John";
    $scope.lastName= "Doe";
	    
	    
    var todoList = this;
	    
    //Whole list
	todoList.todos = [
	    {text:'learn AngularJS', done:true},
	    {text:'build an AngularJS app', done:false}];
	     
	//Remaining    
	todoList.remaining = function() {
	       var count = 0;
	         angular.forEach(todoList.todos, function(todo) {
	         count += todo.done ? 0 : 1;
	       });
	         //System.out.println(" count "+count);
	       return count;
	                 
	      };
	      
	      //Archive
	      todoList.archive = function() {
	    	     var oldTodos = todoList.todos;
	    	     todoList.todos = [];
	    	     angular.forEach(oldTodos, function(todo) {
	    	        if (!todo.done) todoList.todos.push(todo);
	    	     });
	      };
	      
	      //Add
	      todoList.addTodo = function() {
	 	     todoList.todos.push({text:todoList.todoText, done:false});
	 	     todoList.todoText = '';
	      };
	});