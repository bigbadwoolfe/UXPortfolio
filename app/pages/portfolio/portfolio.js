'use strict';

angular.module('mbPortfolio.portfolio', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/portfolio/:project?', {
            templateUrl: 'pages/portfolio/portfolio.html',
            controller: 'PortfolioCtrl'
        });
        $routeProvider.when('/portfolio', {
            templateUrl: 'pages/portfolio/portfolio.html',
            controller: 'PortfolioCtrl'
        });
    }])
    .controller('PortfolioCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        var pName = $routeParams.project;

        $scope.projectName = pName;

    }]);