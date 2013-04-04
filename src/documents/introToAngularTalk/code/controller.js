(function(angular) {
  'use strict';

  var mod = angular.module('neverDos', []);

  mod.controller('list', function($scope) {

    $scope.todos = [
      'Eat Pencils',
      'Cross the street without looking',
      'Support IE6'
    ];

    $scope.add = function() {
      $scope.todos.push(this.newDo);
      $scope.newDo = '';
    };

    $scope.remove = function(idx) {
      $scope.todos.splice(idx, 1);
    };

  });

}(this.angular));
