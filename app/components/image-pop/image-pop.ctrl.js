'use strict';

angular.module('mbPortfolio.components')
.controller('ImagePopController', ['$scope', '$modalInstance', 'url', 'desc', function($scope, $modalInstance, url, desc) {
        $scope.url = url;
        $scope.desc = desc;

        $scope.ok = function() {
            $modalInstance.close(true);
        }

        $scope.cancel = function() {
            $modalInstance.close(false);
        }

    }]);