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
              console.log("************entro a authenticated");
                $http({
                    method: 'GET',
                    url: "https://api.github.com/users/angular"
                    //url: "https://api.github.com/users/whatever?client_id=123456&client_secret=angular"
                }).then(function (response) {
                  console.log("Authenticated");
                }, getError);
            };
            
            var getUsers = function() {

              console.log("************entro a getUsers");
                $http({
                    method: 'GET',
                    url: "https://api.github.com/orgs/angular/repos"
                }).then(function (response) {
                    var userList = [];
                    var data = response.data;
                    var contribs = [];
                    
                    data.forEach(function(val, i) {
                        contribs.push(data[i].contributors_url);
                    });
                    
                    $q.all(contribs.map(function(item) {
                        return $http({
                            method: 'GET',
                            url: item
                        });
                    })).then(function(results) {
                        results.forEach(function(val, i) {
                            userList[i] = val.data;
                        });
                        console.log(userList);
                        return userList;
                    }, function (error) {
                      return error;
                    });
                });
            }

            var getRepositories = function() {
                console.log("---entro al rep---");
                var list = [];
                $http({
                    method: 'GET',
                    url: "https://api.github.com/orgs/angular/repos"
                }).then(function (response) {
                    list =  response.data;
                    console.log(list);
                }, function (error) {
                    return error;
                });
                $q.all(list.map(function(item){
                    
                    return list;
                }));
            }

            return {
              authenticate: authenticate,
              getUsers: getUsers,
              getRepositories: getRepositories
          }
          //authenticated();
        }
})();
  