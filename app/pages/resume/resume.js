'use strict';

angular.module('mbPortfolio.resume', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'pages/resume/resume.html',
    controller: 'ResumeCtrl'
  });
}])

.controller('ResumeCtrl', ['$scope', function($scope) {
      $scope.collapsed = true;

      $scope.collapseText = 'show details';


      $scope.toggleDetails = function() {
        $scope.collapsed = !$scope.collapsed;
        $scope.collapseText  = $scope.collapsed ? 'Show Details': "Show Summary";
      }
}]);