(function($angular) {
    'use strict';

    $angular.module('app')
    .controller('mainController', ['$scope', function($scope){
      $scope.display = null;
    }]);

})(window.angular);
