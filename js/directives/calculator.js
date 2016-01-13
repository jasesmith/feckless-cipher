(function($angular) {
  'use strict';

  $angular.module('app')

  .directive('jsCalculator', [function(){
    return {
      restrict: 'E',
      replace: true,

      scope: {
        display: '=?'
      },

      controller: ['$scope', function($scope){
        $scope.controls = {
          left: [
            {
              block: 'modifiers',
              controls: [
                {label: '&plusmn;', action: 'flp'},
                {label: '&times;<sup>2</sup>', action: 'sqd'},
                {label: '&radic;', action: 'sqr'}
              ]
            },
            {
              block: 'digits',
              controls: [
                {label: '9', action: '9'},
                {label: '8', action: '8'},
                {label: '7', action: '7'},
                {label: '6', action: '6'},
                {label: '5', action: '5'},
                {label: '4', action: '4'},
                {label: '3', action: '3'},
                {label: '2', action: '2'},
                {label: '1', action: '1'},
                {label: '.', action: 'dec'},
                {label: '0', action: '0'},
                {label: 'C', action: 'clr'}
              ]
            }
          ],
          right: [
            {
              block: 'operators',
              controls: [
                {label: '&divide;', symbol: '/', action: 'div'},
                {label: '&times;', symbol: '*', action: 'mul'},
                {label: '&minus;', symbol: '-', action: 'sub'},
                {label: '&plus;', symbol: '+', action: 'add'},
                {label: '=', action: 'eql'}
              ]
            }
          ]
        };
      }],

      template: '' +
        '<div class="calculator">'+
          '<div class="calculator-body">' +
            '<div class="lcd">{{display}}</div>' +
            '<div class="controls">' +
              '<div class="group" ng-repeat="group in controls">' +
                '<div class="block {{block.block}}" ng-repeat="block in group">' +
                  '<div class="control key-{{control.action}}" ng-click="calc(control.action)" ng-repeat="control in block.controls"><span ng-bind-html="control.label"></span></div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '',

      link: function(scope, element) {
        scope.display = '0';

        scope.calc = function(action) {
          if(action === 'clr') {
            scope.display = '0';
          }
          else if(scope.display === '0') {
            if(parseInt(action) > 0) {
              scope.display = action;
            }
          }
          else if(action === 'eql') {
            scope.display = eval(scope.display);
          }
          else if(action === 'pct') {
            var c = eval(scope.display);
            scope.display = eval(c + (parseFloat(scope.display) * 1 / 100));
          }
          else if(action === 'flp') {
            scope.display = -parseFloat(scope.display);
          }
          else if(action === 'sqd') {
            scope.display = eval(scope.display*scope.display); //Math.sqrt(scope.display);
          }
          else if(action === 'sqr') {
            scope.display = Math.sqrt(scope.display);
          }
          else {
            if(action === 'dec') {
              scope.display += '.';
            }
            else if(action === 'div') {
              scope.display += ' / ';
            }
            else if(action === 'mul') {
              scope.display += ' * ';
            }
            else if(action === 'sub') {
              scope.display += ' - ';
            }
            else if(action === 'add') {
              scope.display += ' + ';
            }
            else {
              scope.display += action;
            }
          }
        };
      }
    };

  }]);

})(window.angular);
