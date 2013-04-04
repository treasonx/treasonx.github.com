(function(angular, setTimeout) {
  'use strict';

  var mod = angular.module('digest', []);

  mod.controller('clock', function($scope) {

    var tickTimeout = 1000;

    function updateTime() {
      $scope.time = new Date().toLocaleTimeString();
    }

    function scheduleTick() {
      setTimeout(tick, tickTimeout);
    }

    function tick() {
      updateTime();
      console.log($scope.time);
      scheduleTick();
    };

    updateTime();
    scheduleTick();

  });

}(this.angular, this.setTimeout));
