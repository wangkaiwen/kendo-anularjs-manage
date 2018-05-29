(function (angular) {
    var app = angular.module('componentsAutoComplete', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/components/autoComplete/', {
                    templateUrl: './static/template/components/autoComplete/index.html',
                    controller: 'componentsAutoCompleteController'
                })
        }])
        .controller('componentsAutoCompleteController', ['$scope', '$routeParams','assist',function ($scope, $routeParams,assist) {


            $scope.countryNames = [
                "Albania",
                "Andorra",
                "Armenia",
                "Austria",
                "Azerbaijan",
                "Belarus",
                "Belgium",
                "Bosnia & Herzegovina",
                "Bulgaria",
                "Croatia",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Estonia",
                "Finland",
                "France",
                "Georgia",
                "Germany",
                "Greece",
                "Hungary",
                "Iceland",
                "Ireland",
                "Italy",
                "Kosovo",
                "Latvia",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macedonia",
                "Malta",
                "Moldova",
                "Monaco",
                "Montenegro",
                "Netherlands",
                "Norway",
                "Poland",
                "Portugal",
                "Romania",
                "Russia",
                "San Marino",
                "Serbia",
                "Slovakia",
                "Slovenia",
                "Spain",
                "Sweden",
                "Switzerland",
                "Turkey",
                "Ukraine",
                "United Kingdom",
                "Vatican City"
            ];

            $scope.autoCompleteTemplate={
                minLength: 1,
                dataTextField: "ContactName",
                headerTemplate: '<div class="dropdown-header k-widget k-header">' +
                '<span>照片</span>' +
                '<span>详细信息</span>' +
                '</div>',
                footerTemplate: '共 #: instance.dataSource.total() # 项',
                template: '<img src="public/image/Customers/#:data.CustomerID#.jpg">' +
                '<span class="k-state-default"><h3>#: data.ContactName #</h3><p>#: data.CompanyName #</p></span>',
                dataSource: {
                    transport: {
                        read:{
                            dataType: "jsonp",
                            url: "https://demos.telerik.com/kendo-ui/service/Customers"
                        }
                    }
                },
                height: 400
            };

            $scope.autoCompleteGroup={
                dataTextField: "ContactName",
                height: 400,
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                    },
                    group: { field: "Country" }
                }
            }


        }])



})(angular);