(function(angular){
  'use strict';

  var mod = angular.module('pubsub', []);

  mod.controller('pubsubCtrl', function($scope) {

    $scope.lightup = 'white';

    $scope.broadcast = function() {
      $scope.$broadcast('lightup');
    };

    $scope.emit = function() {
      $scope.$emit('lightup');
    };

    $scope.$on('lightup', function() {
      $scope.lightup = 'red';
    });

  });

}(this.angular));
