'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  service('githubService', ['$http', function ($http) {
    this.getRepoInfo = function (repo) {
      return $http.get('https://api.github.com/repos/' + repo, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      }).then(function (result) {
        return {
          forks: result.data.forks,
          watchers: result.data.watchers
        };
      });
    };
  }]);
