(function() {
    'use strict';

    angular
        .module('app')
        .directive('repositoryCard', repositoryCard);

    function repositoryCard() {
        function linkFunction (scope) {
        }
        
        var directive = {
            restrict: 'E',
            scope: {
                repoName: '@',
                linkGit: '@',
                description: '@',
                amountOfIssues: '@'
            },

            templateUrl: 'Views/repository-card.template.html',
            link: linkFunction
        };
        
        return directive;
    }
})();
