angular.module('mbPortfolio.components')
    .controller('ContentController',['$scope', '$modal', function($scope, $modal){
        $scope.showPhoto = function(photoUrl, size, desc) {
            $scope.modalInstance = $modal.open({
                templateUrl: 'components/image-pop/image-pop.tpl.html',
                controller: 'ImagePopController',
                size: size,
                resolve: {
                    url : function() {
                        return photoUrl;
                    },
                    desc: function() {
                        return desc;
                    }
                }
            });
        };
    }]);