(function (angular) {
    //辅助方法模块
    var assist = angular.module('assist', ['ipCookie'])
        .service('assist', ['$timeout', '$location', 'ipCookie', function ($timeout, $location, ipCookie) {

            /* -------------- 跳转到指定的路由 --------------- */
            this.routeTo = function (route, target) {
                $timeout(function () {
                    if (target) {
                        window.open($location.absUrl().split('#')[0] + '#' + route);
                    } else {
                        $location.url(route);
                    }
                }, 1);
            };

            /* --------------- 使用cookie ------------------- */
            this.cookie = ipCookie;

            /* ---------------- 指定属性  location ------------- */
            this.location = $location;

            this.HOST='http://yapi.demo.qunar.com/mock/8043/angular/kendo';

        }])




})(angular);