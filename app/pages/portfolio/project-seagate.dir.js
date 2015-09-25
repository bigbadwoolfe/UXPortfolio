/**
 * Created by Metodi on 24/09/2015.
 */
    angular.module('mbPortfolio.portfolio')
.directive('projectSeagate', function() {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'pages/portfolio/project-seagate.tpl.html'
        };
    });