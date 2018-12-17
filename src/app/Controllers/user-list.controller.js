(function () {
    'use strict';
    angular
        .module('app')
        .controller('UserListController', UserListController);
        UserListController.$inject = ['GithupService'];
    
        function UserListController(GithupService) {
            var vm = this;
            //GithupService.authenticate();
            vm.repositoriesList = GithupService.getRepositories();
            
            vm.loadRepositoryList = function () {
                //console.log("*******");
                //console.log(vm.repositoriesList);
                //return GithupService.getRepositories();
                return vm.repositoriesList;
            }

            //vm.loadRepositoryList();
        }
})();
