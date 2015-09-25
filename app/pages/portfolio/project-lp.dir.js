/**
 * Created by Metodi on 24/09/2015.
 */
    angular.module('mbPortfolio.portfolio')
.directive('projectLp', function() {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'pages/portfolio/project-lp.tpl.html'
        };
    });