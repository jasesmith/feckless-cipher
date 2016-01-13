(function($angular) {
    'use strict';

    $angular
    .module('app', [
        'jamfu',
        'ui.router',
        'ngSanitize'
    ])
    .controller('appController', ['$scope', function($scope) {

        $scope.headline = 'Cipher';
        $scope.icon = 'calculator';

    }]);

})(window.angular);
