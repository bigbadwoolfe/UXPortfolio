'use strict';

angular.module('mbPortfolio.resume', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'pages/resume/resume.html',
    controller: 'ResumeCtrl'
  });
}])

.controller('ResumeCtrl', [function() {

}]);