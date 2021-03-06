(function() {
    'use strict';

    angular
        .module('app')
        .directive('userCard', userCard);

    function userCard() {
        function linkFunction (scope) {
        }
        
        var directive = {
            restrict: 'E',
            scope: {
                name: '@',
                linkUser: '@',
                linkRepo: '@',
                userImage: '@'
            },

            templateUrl: 'Views/user-card.template.html',
            link: linkFunction
        };
        
        return directive;
    }
})();
