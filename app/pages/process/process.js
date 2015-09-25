'use strict';

angular.module('mbPortfolio.process', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/process', {
    templateUrl: 'pages/process/process.html',
    controller: 'ProcessCtrl'
  });
}])

.controller('ProcessCtrl', [function() {

}]);