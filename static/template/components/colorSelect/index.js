(function (angular) {
    var app = angular.module('colorSelect', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/components/colorSelect/:id?', {
                    templateUrl: './static/template/components/colorSelect/index.html',
                    controller: 'colorSelectController'
                })
        }])
        .controller('colorSelectController', ['$scope', '$routeParams', 'assist', function ($scope, $routeParams, assist) {



        }]);


})(angular);