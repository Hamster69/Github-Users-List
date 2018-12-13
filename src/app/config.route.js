(function() {
    'use strict';
    
    angular
        .module('app')
        .config(appRun);
        
    appRun.$inject = ['$urlRouterProvider', '$stateProvider'];

	function appRun($urlRouterProvider, $stateProvider) {
	    
	    //$urlRouterProvider.otherwise('/home');
	    /*
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'index.html',
			title: 'main'
		});*/
	}
})();