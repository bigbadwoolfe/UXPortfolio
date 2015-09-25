angular.module('mbPortfolio.components')
    .controller('HeaderController',['$scope', '$rootScope',function($scope, $rootScope){
        $scope.title='About';

        $scope.$on('headerContentChanged', function(event, arg) {
            $scope.title = arg.title;
        });
    }]);