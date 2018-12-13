(function() {
    'use strict';

    angular
        .module('app')
        .directive('userCard', userCard);

    function userCard() {
        function linkFunction (scope) {

            scope.used = false;
            scope.onFocus = onFocus;
            scope.onBlur = onBlur;
            
            function onFocus() {
                scope.used = true;
            }

            function onBlur() {
                scope.used = validateInput();
            }

            function validateInput() {
                scope.ngValue = scope.ngModel;
                var res = scope.ngValue ? true : false;
                return res;
            }

            function init() {
                if(scope.ngValue) {
                    scope.ngModel = scope.ngValue;
                    scope.used = true;
                }
            }

            init();
        }
        
        var directive = {
            restrict: 'E',
            scope: {
                name: '@',
                linkUser: '@',
                linkRepo: '@',
                userImage: '@'
            },

            templateUrl: 'Directives/UserCard.html',
            link: linkFunction
        };
        
        return directive;
    }
})();
