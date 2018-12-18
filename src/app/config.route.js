(function() {
    'use strict';
    
    angular
        .module('app')
        .config(appRun);
        
    appRun.$inject = ['$urlRouterProvider', '$stateProvider'];

	function appRun($urlRouterProvider, $stateProvider) {
	    
	    $urlRouterProvider.otherwise('/userList');
	    
		$stateProvider
		.state('user-list', {
			url: '/userList',
			templateUrl: 'Views/user-list.template.html',
			title: 'User List',
			controller: "UserListController",
			controllerAs: 'vm'
		}).state('repo-list', {
			url: '/repoList',
			templateUrl: 'Views/repository-list.template.html',
			title: 'User List'
		});
	}
})();