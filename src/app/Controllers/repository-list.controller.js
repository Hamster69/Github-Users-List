(function () {
    'use strict';
    angular
        .module('app')
        .controller('RepositoryListController', RepositoryListController);
        RepositoryListController.$inject = ['GithupService'];
    
        function RepositoryListController(GithupService) {
            var vm = this;
            vm.repositoryList = [];
            
            GithupService.authenticate();
            
            GithupService.getRepositories(({ data }) => {
                vm.repositoryList = data;
            });   
        }
})();
