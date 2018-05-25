(function (angular) {
    var app = angular.module('componentsButton', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/components/button/', {
                    templateUrl: './static/template/components/button/index.html',
                    controller: 'componentsButtonController'
                })
        }])
        .controller('componentsButtonController', ['$scope', '$routeParams','assist',function ($scope, $routeParams,assist) {



            $scope.buttonGroupOptions={
                index:0,
                items:[{
                    text:'one',
                },{
                    text:'two'
                },{
                    text:'three'
                }]
            };




        }])



})(angular);