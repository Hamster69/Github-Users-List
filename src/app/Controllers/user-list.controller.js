(function () {
    'use strict';
    angular
        .module('app')
        .controller('UserListController', UserListController);
        UserListController.$inject = ['GithupService'];
    
        function UserListController(GithupService) {
            var vm = this;
            vm.userList = [];
            
            GithupService.authenticate();
            
            GithupService.getUsers(( success ) => {
                vm.userList = success;
            });     
        }
})();
