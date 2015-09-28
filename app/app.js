'use strict';

// Declare app level module which depends on views, and components
angular.module('mbPortfolio', [
    'ngRoute',
    'ui.bootstrap',
    'mbPortfolio.about',
    'mbPortfolio.process',
    'mbPortfolio.portfolio',
    'mbPortfolio.resume',
    'mbPortfolio.contact',
    'mbPortfolio.components'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/about'
    });
}]).controller('SiteController', ['$scope','$rootScope','$location','$filter', '$timeout', function($scope, $rootScope, $location, $filter, $timeout) {

    $scope.model = $scope.fn = {};
    $scope.model.navItems = [
        {href:'#/contact', class:'contact', text:'Contact', icon:'at', id:'contact'},
        {href:'#/resume', class:'resume', text:'Resume', icon:'file-text', id:'resume'},
        {href:'#/portfolio', class:'portfolio', text:'Portfolio', icon:'file-image-o', id:'portfolio'},
        {href:'#/process', class:'process', text:'Process', icon:'cogs', id:'process'},
        {href:'#/about', class:'about', text:'About', icon:'user', id:'about'}
    ];

    var cActive = $scope.model.activeNavItem = getCurrentNavItem();
    $scope.setActive = function(id) {
        $scope.model.activeNavItem = getNavItemById(id);
        cActive = $scope.model.activeNavItem;
    };

    $rootScope.$on('page-changed', function(evt,data) {
        $scope.setActive(data);
    });
    $scope.showHover = function(id) {
        cActive = $scope.model.activeNavItem;
        $scope.model.activeNavItem = getNavItemById(id);
    };

    $scope.hideHover = function() {
        $scope.model.activeNavItem = cActive;
    }

    function getNavItemById(id) {
        var a = $filter('filter')($scope.model.navItems, {id: id});
        if (a.length == 1)
            return a[0];
        return;
    }

    function getNavItemByUrl(url) {
        var a = $filter('filter')($scope.model.navItems, {href: '#' + url});
        if (a.length == 1)
            return a[0];
        return;
    }

    function getCurrentNavItem() {
        return getNavItemByUrl($location.path());

    }



}]);