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
			templateUrl: 'Views/UserList.html',
			title: 'User List'
		}).state('repo-list', {
			url: '/repoList',
			templateUrl: 'Views/RepositoryList.html',
			title: 'User List'
		});
	}
})();