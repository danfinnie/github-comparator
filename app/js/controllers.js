'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('githubRow', ['$scope', 'githubService', function($scope, githubService) {
    $scope.$watch('repo', function(repo) {
      githubService.getRepoInfo(repo).then(function (repoInfo) {
        $scope.repoInfo = repoInfo;
      });
    });
  }]);
