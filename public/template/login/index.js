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

                var loginData = {
                    username: $scope.user.name,
                    password: $scope.user.password
                };
                if($scope.user.name&&$scope.user.password){
                    //登录成功， 建立cookies表明登录成功
                    assist.cookie('hasLogin', true);
                    assist.routeTo(sessionStorage.getItem('logUrl') ? sessionStorage.getItem('logUrl') : '/welcome');
                }

                $.ajax({
                    type: 'POST',
                    url: assist.HOST + '/login',
                    data: loginData,
                    success: function (data) {
                        console.log(data);
                        if(data.message){
                            //登录成功
                            assist.cookie('hasLogin', true);
                            assist.cookie('username', $scope.user.name);
                            assist.cookie('password',  $scope.user.password);
                            assist.routeTo(sessionStorage.getItem('logUrl') ? sessionStorage.getItem('logUrl') : '/welcome');
                        }
                    },
                    error: function (data) {

                        alertObj.data("kendoNotification").error('登录失败');
                    }
                });





            };

            /* ----------- 注册 -------------- */
            $scope.showRegister = false;
            $scope.register = function () {
                $scope.showRegister = !$scope.showRegister;
            };
        }]);

})(angular);