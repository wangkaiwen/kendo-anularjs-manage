(function (angular) {
    var app = angular.module('welcome', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/welcome', {
                    templateUrl: './public/template/welcome/index.html',
                    controller: 'welcomeController'
                })
        }])
        .controller('welcomeController', ['$scope', function ($scope) {


        }]);

})(angular);