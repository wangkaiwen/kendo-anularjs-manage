(function (angular) {
    var app = angular.module('baseSelect', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/components/select', {
                    templateUrl: './static/template/components/select/index.html',
                    controller: 'baseSelectController'
                })
        }])
        .controller('baseSelectController', ['$scope', '$routeParams', 'assist', function ($scope, $routeParams, assist) {

            $scope.productsDataSource = {
                type: "odata",
                serverFiltering: true,
                transport: {
                    read: {
                        url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                    }
                }
            };

            $scope.customersDataSource = {
                transport: {
                    read: {
                        dataType: "jsonp",
                        url: "https://demos.telerik.com/kendo-ui/service/Customers",
                    }
                }
            };

            $scope.customOptions = {
                dataSource: $scope.customersDataSource,
                dataTextField: "ContactName",
                dataValueField: "CustomerID",

                headerTemplate: '<div class="dropdown-header k-widget k-header">' +
                '<span>照片</span>' +
                '<span>更多信息</span>' +
                '</div>',

                // using {{angular}} templates:
                valueTemplate: '<span class="selected-value" style="background-image: url(\'public/image/Customers/{{dataItem.CustomerID}}.jpg\')"></span><span>{{dataItem.ContactName}}</span>',

                template: '<span class="k-state-default" style="background-image: url(\'public/image/Customers/{{dataItem.CustomerID}}.jpg\')"></span>' +
                '<span class="k-state-default"><h3>{{dataItem.ContactName}}</h3><p>{{dataItem.CompanyName}}</p></span>',
            };

        }]);


})(angular);