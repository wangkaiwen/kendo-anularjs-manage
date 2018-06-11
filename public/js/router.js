(function (angular) {
    //辅助方法模块
    var assist = angular.module('router', [])
        .service('router', [function () {

            this.config=[
                {
                    text: '基础组件',
                    icon: 'fa fa-copyright fa-fw',
                    items: [{
                        text: '按钮',
                        link: '#/components/button/'
                    },{
                        text: '自动完成',
                        link: '#/components/autoComplete/'
                    },{
                        text: '颜色选择',
                        link: '#/components/colorSelect/'
                    },{
                        text: '公司管理',
                        link: '#/components/brandsManage/'
                    }, {
                        text: 'Banner',
                        link: '#/components/brandsBanner/'
                    },]
                },
            ]

        }])




})(angular);