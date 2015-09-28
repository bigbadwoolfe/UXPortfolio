/**
 * Created by Metodi on 28/09/2015.
 */
angular.module('mbPortfolio.contact')
.directive('skill', function() {
        return {
          restrict: 'AE',
            replace: true,
            templateUrl: 'components/skill/skill.tpl.html',
            scope: {
                name: '@',
                score: '@'
            }
        };
    })