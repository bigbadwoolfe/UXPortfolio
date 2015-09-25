angular.module('mbPortfolio.components')
    .controller('NavController',['$scope', '$location', '$rootScope', function($scope, $location, $rootScope){
        $scope.navItems = [
            {href:'#/contact', class:'contact', text:'Contact', icon:'at'},
            {href:'#/resume', class:'resume', text:'Resume', icon:'file-text'},
            {href:'#/portfolio', class:'portfolio', text:'Portfolio', icon:'file-image-o'},
            {href:'#/process', class:'process', text:'Process', icon:'cogs'},
            {href:'#/about', class:'about', text:'About', icon:'user'},
        ];

        $scope.activeNavItem = $location.path().substring(1);
        var i = $scope.activeNavItem.indexOf('/');
        if (i >= 0)
            $scope.activeNavItem = $scope.activeNavItem.substring(0, i);

        $scope.setActive = function(className) {
            $scope.activeNavItem = className;
            $rootScope.$broadcast('headerContentChanged', {title: className});
        };

        $scope.setActive($scope.activeNavItem);

        var cActive = '';
        $scope.showHover = function(className) {
            cActive = $scope.activeNavItem;
            $scope.setActive(className);
        };

        $scope.hideHover = function() {
            $scope.setActive(cActive);
        }
    }]);