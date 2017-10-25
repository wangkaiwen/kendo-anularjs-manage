(function (angular) {
    var app = angular.module('login', ['ipCookie', 'assist'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl: './public/template/login/index.html',
                    controller: 'loginController'
                })
        }])
        .controller('loginController', ['$scope', 'assist', '$timeout', function ($scope, assist, $timeout) {
            $scope.user = {
                name: '',
                password: ''
            };


            /* ---------- 提示框 ----------- */
            var alertObj = $("#alertBox").kendoNotification({
                position: {
                    pinned: true,
                    top: 100,
                    right: 330
                },
                autoHideAfter: 2000
            });


            /* ----------- 登陆  ------------ */

            $scope.login = function () {

                // var loginData = {
                //     grant_type: 'password',
                //     username: $scope.user.name,
                //     password: $scope.user.password
                // };
                if($scope.user.name&&$scope.user.password){
                    //登录成功， 建立cookies表明登录成功
                    assist.cookie('hasLogin', true);
                    assist.cookie('HOST', assist.HOST);

                    assist.routeTo(sessionStorage.getItem('logUrl') ? sessionStorage.getItem('logUrl') : '/welcome');
                }

                // $.ajax({
                //     type: 'POST',
                //     url: assist.HOST + '/Token',
                //     data: loginData,
                //     success: function (data) {
                //
                //         //登录成功， 建立cookies表明登录成功
                //         assist.cookie('hasLogin', true);
                //         assist.cookie('HOST', assist.HOST);
                //
                //         assist.cookie('tokenKey', data.access_token);
                //
                //         assist.routeTo(sessionStorage.getItem('logUrl') ? sessionStorage.getItem('logUrl') : '/welcome');
                //
                //     },
                //     error: function (data) {
                //
                //         alertObj.data("kendoNotification").error(data.responseJSON.error_description);
                //     }
                // });





            };

            /* ----------- 注册 -------------- */
            $scope.showRegister = false;
            $scope.register = function () {
                $scope.showRegister = !$scope.showRegister;
            };
        }]);

})(angular);