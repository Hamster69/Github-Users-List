(function () {
    'use strict';
    angular
        .module('app')
        .factory('GithupService', GithupService);
        GithupService.$inject = ['$http', '$q'];  
    
        function GithupService($http, $q) {

            function getError(error){
                return error;
            };
           
            var authenticate = function() {
                $http({
                    method: 'GET',
                    url: "https://api.github.com/users/angular"
                }).then(function (response) {
                  console.log("Authenticated");
                }, getError);
            };
            
            var getRepositories = async (onSuccess) => {
                const repos = await $http({
                    method: 'GET',
                    url: "https://api.github.com/orgs/angular/repos"
                });

                onSuccess(repos);
            }
            
            var getUsers = async (onSuccess) => {
                var contribs = [];
                var userList = [];
                getRepositories(({ data }) => {
                    data.forEach(function(val, i) {
                        contribs.push(data[i].contributors_url);
                    });
                    return $q.all(contribs.map(function(item) {
                        return $http({
                            method: 'GET',
                            url: item
                        });
                    })
                    ).then(function(results) {
                         results.forEach(function(val, i) {
                             userList[i] = val.data;
                         });
                         onSuccess(userList[1]);
                    });
            });
                
            }
            return {
              authenticate: authenticate,
              getUsers: getUsers,
              getRepositories: getRepositories
          }
        }
})();