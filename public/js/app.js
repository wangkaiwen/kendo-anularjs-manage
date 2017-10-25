(function (angular) {

    var app = angular.module('app', ['kendo.directives', 'ngRoute', 'public', 'assist', 'static'])
        .controller('AppCtrl', [
            '$scope', '$routeParams', 'assist',
            function ($scope, $routeParams, assist) {

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

                $scope.treeData = [{
                    text: '品牌商',
                    icon: 'fa fa-copyright fa-fw',
                    items: [{
                        text: '公司管理',
                        link: '#/brands/brandsManage/'
                    }, {
                        text: 'Banner',
                        link: '#/brands/brandsBanner/'
                    },
                    //     {
                    //     text: '系统角色管理',
                    //     link: '#/brands/brandsUser/'
                    // }, {
                    //     text: '菜单管理',
                    //     link: '#/brands/brandsMenu/左侧菜单管理'
                    // }
                    ]
                },
                //     {
                //     text: '联保商',
                //     icon: 'fa fa-shield fa-fw',
                //     items: [{
                //         text: '联保商管理',
                //         link: '#/docking/dockingManage/'
                //     }, {
                //         text: '手机端Banner',
                //         link: '#/docking/dockingBanner/'
                //     }, {
                //         text: '系统角色管理',
                //         link: '#/docking/dockingUser/'
                //     }, {
                //         text: '菜单管理',
                //         link: '#/docking/dockingMenu/左侧菜单管理'
                //     }]
                // }, {
                //     text: '网点',
                //     icon: 'fa fa-share-alt fa-fw',
                //     items: [{
                //         text: '网点管理',
                //         link: '#/branch/branchManage/'
                //     }, {
                //         text: '菜单管理',
                //         link: '#/branch/branchMenu/左侧菜单管理'
                //     }, {
                //         text: '收钱吧审核',
                //         link: '#/branch/branchMoney/'
                //     }]
                // },
                //     {
                //         text: '师傅',
                //         icon: 'fa fa-user-o fa-fw',
                //         items: [{
                //             text: '师傅管理',
                //             link: '#/master/masterManage/'
                //         }]
                //     },
                //     {
                //         text: '订单',
                //         link: '#/trade/index',
                //         icon: 'fa fa-file-text-o fa-fw'
                //     },
                //     {
                //         text: '财务',
                //         link: '#/finance/index',
                //         icon: 'fa fa-database fa-fw'
                //     },
                //     {
                //         text: '服务',
                //         icon: 'fa fa-heart-o fa-fw',
                //         items: [{
                //             text: '服务类型配置',
                //             link: '#/service/type/系统默认'
                //         },
                //             {
                //                 text: '产品配置',
                //                 link: '#/service/product/产品概览'
                //             },
                //             {
                //                 text: '故障类型配置',
                //                 link: '#/service/false/故障类型概览'
                //             },
                //             {
                //                 text: '备件配置',
                //                 link: '#/service/prepare/'
                //             },
                //             {
                //                 text: '价格配置',
                //                 link: '#/service/value/'
                //             }
                //         ]
                //     }
                ];

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