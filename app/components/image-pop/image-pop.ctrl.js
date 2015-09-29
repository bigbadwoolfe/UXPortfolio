'use strict';

angular.module('mbPortfolio.components')
.controller('ImagePopController', ['$scope', '$modalInstance', '$timeout', 'url', 'desc', function($scope, $modalInstance, $timeout, url, desc) {
        $scope.url = url;
        $scope.desc = desc;

        $scope.ok = function() {
            $modalInstance.close(true);
        }

        $scope.cancel = function() {
            $modalInstance.close(false);
        }

        $scope.showHideMsg = true;

        $timeout(function() {
            $scope.showHideMsg = false;

        }, 3000)


    }]);
