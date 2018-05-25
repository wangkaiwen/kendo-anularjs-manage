(function (angular) {

    var app = angular.module('app', ['kendo.directives', 'ngRoute', 'public', 'assist','router', 'static'])
        .controller('AppCtrl', [
            '$scope', '$routeParams', 'assist','router',
            function ($scope, $routeParams, assist,router) {

                /* --------------- 对url锚点的记录 */
                if (!assist.location.url()) {
                    assist.routeTo('/welcome');
                }
                $scope.asideOpen = '#' + assist.location.url();


                /* ----------------  对日期控件的自动弹出 -------------------- */
                $('body').on('focus', '.k-datetimepicker input, .k-datepicker input', function () {
                    if ($(this).data('kendoDatePicker')) {
                        $(this).data('kendoDatePicker').open();
                    } else {
                        $(this).data('kendoDateTimePicker').open();
                    }
                });


                /* -------------------- 添加左侧结构菜单 ------------------- */

                $scope.treeData = router.config;

                /* -------------------- 添加左侧结构菜单 ------------------- End */


                setTimeout(function () {
                    var $openedItem = $('a.opened');
                    if ($openedItem[0]) {
                        $scope.tree.select($openedItem);
                        if ($openedItem.closest('ul').siblings().find('a')[0]) {
                            $scope.tree.expand($openedItem.closest('ul').siblings().find('a'));
                        }
                    }
                }, 1);


                /* -------------------- 登录判断 ------------------------- */
                //如果没有登录，跳转到登录页面
                if (!assist.cookie('hasLogin')) {
                    if (assist.location.url() !== '' && assist.location.url() !== '/login') {
                        sessionStorage.setItem('logUrl', assist.location.url());
                    }
                    assist.routeTo('/login');
                }

                /* ------------ 登出 ------------- */
                $scope.logout = function () {
                    assist.cookie.remove('hasLogin');
                    assist.cookie.remove('HOST');
                    sessionStorage.removeItem('logUrl');
                    assist.routeTo('/login');
                };


                /* -------------- 单击打开 --------------- */
                // $scope.changeState = function(u){
                //     console.log(u);
                // }


            }
        ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            //清除哈希值默认添加的标志字符
            $locationProvider.hashPrefix('');

        }]);


})(angular);