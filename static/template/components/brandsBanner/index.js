(function (angular) {
    var app = angular.module('brandsBanner', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/components/brandsBanner/:id?', {
                    templateUrl: './static/template/components/brandsBanner/index.html',
                    controller: 'brandsBannerController'
                })
        }])
        .controller('brandsBannerController', ['$scope', '$routeParams', 'assist', function ($scope, $routeParams, assist) {
            $scope.dataId = $routeParams.id;


            function getData() {
                return new kendo.data.DataSource({
                    data: [{
                        BannerImage: "http://img.90sheji.com/dianpu_cover/74/08/26/3/04cbannerYgi_370.jpg",
                        BannerName: "这是谁",
                        Content: '什么是图文内容<table class="k-table"><tbody><tr style="height:25%;" data-role="resizable"><td style="width:33.333333333333336%;" data-role="resizable">表格﻿</td><td style="width:33.333333333333336%;" data-role="resizable">表格</td><td style="width:33.333333333333336%;">表格</td></tr><tr style="height:25%;" data-role="resizable"><td style="width:33.333333333333336%;" data-role="resizable">表格</td><td style="width:33.333333333333336%;" data-role="resizable">表格</td><td style="width:33.333333333333336%;">表格</td></tr><tr style="height:25%;" data-role="resizable"><td style="width:33.333333333333336%;">表格</td><td style="width:33.333333333333336%;">表格</td><td style="width:33.333333333333336%;">表格</td></tr><tr style="height:25%;"><td style="width:33.333333333333336%;" data-role="resizable">表格</td><td style="width:33.333333333333336%;" data-role="resizable">表格</td><td style="width:33.333333333333336%;">表格</td></tr></tbody></table><div class="k-table-resize-handle-wrapper" unselectable="on" contenteditable="false" data-role="draggable" style="top: 20.4px; left: 3.5px; position: absolute;"><div class="k-table-resize-handle k-resize-northwest"></div></div><div class="k-table-resize-handle-wrapper" unselectable="on" contenteditable="false" data-role="draggable" style="top: 20.4px; left: 303.5px; position: absolute;"><div class="k-table-resize-handle k-resize-north"></div></div><div class="k-table-resize-handle-wrapper" unselectable="on" contenteditable="false" data-role="draggable" style="top: 20.4px; left: 603.5px; position: absolute;"><div class="k-table-resize-handle k-resize-northeast"></div></div><div class="k-table-resize-handle-wrapper" unselectable="on" contenteditable="false" data-role="draggable" style="top: 70.4px; left: 603.5px; position: absolute;"><div class="k-table-resize-handle k-resize-east"></div></div><div class="k-table-resize-handle-wrapper" unselectable="on" contenteditable="false" data-role="draggable" style="top: 120.4px; left: 603.5px; position: absolute;"><div class="k-table-resize-handle k-resize-southeast"></div></div><div class="k-table-resize-handle-wrapper" unselectable="on" contenteditable="false" data-role="draggable" style="top: 120.4px; left: 303.5px; position: absolute;"><div class="k-table-resize-handle k-resize-south"></div></div><div class="k-table-resize-handle-wrapper" unselectable="on" contenteditable="false" data-role="draggable" style="top: 120.4px; left: 3.5px; position: absolute;"><div class="k-table-resize-handle k-resize-southwest"></div></div><div class="k-table-resize-handle-wrapper" unselectable="on" contenteditable="false" data-role="draggable" style="top: 70.4px; left: 3.5px; position: absolute;"><div class="k-table-resize-handle k-resize-west"></div></div><table class="k-table"><tbody><tr style="height:100%;"><td style="width:33.333333333333336%;">﻿</td><td style="width:33.333333333333336%;">﻿</td><td style="width:33.333333333333336%;">﻿</td></tr></tbody></table><br class="k-br">',
                        CreateTime: "2017-05-26 00:03:09",
                        IsShow: null,
                        LbStatus: "已发布",
                        LinkUrl: "http://www.baidu.com",
                        MovePkId: null,
                        PkId: "7a9f7aed-2613-253b-54c5-d5c567fb3876",
                        SendType: "图文内容",
                        SortNum: 2,
                        Status: "已发布"
                    },{
                        BannerImage: "http://sc.jb51.net/uploads/allimg/140424/11-140424105H80-L.jpg",
                        BannerName: "这是谁",
                        Content: '什么是图文内容<h1>哈哈哈哈</h1>',
                        CreateTime: "2017-05-26 00:03:09",
                        IsShow: null,
                        LbStatus: "已发布",
                        LinkUrl: "http://www.baidu.com",
                        MovePkId: null,
                        PkId: "7a9f7aed-2613-253b-54c5-d5c567fb3876",
                        SendType: "图文内容",
                        SortNum: 2,
                        Status: "已发布"
                    }]
                })
            }

            var dataSource = getData();


            /* ---------------------- 表格内容 --------------------------- */
            $scope.gridOptions = {
                dataSource: dataSource,
                scrollable: false,
                columns: [{
                    field: 'BannerName',
                    title: 'Banner标题',
                    width: 200
                },
                    {
                        field: 'BannerImage',
                        title: 'Banner图片',
                        template: '<img src="#= BannerImage#" style="width:180px;height:65px">',
                        width: 200
                    },
                    {
                        field: 'Status',
                        title: '状态',
                        width: 150,
                        template: $('#status').html()
                    },
                    {
                        field: 'CreateTime',
                        title: '添加日期',
                        width: 180
                    },
                    {
                        title: '操作',
                        template: $('#operation').html(),
                        width: 240
                    }
                ]
            };


            /* ---------- 改变发送类型 --------- */
            $scope.changeSendType = function (type) {
                $scope.dataItem.SendType = type;
            };

            /* ----------- 改变BannerImage --------------- */
            $scope.changeImg = function (e) {

                if (e[0].type.indexOf('image') < 0) {
                    kendo.alert('不是正确的图片类型');
                    return;
                }

                if (Math.floor(e[0].size / 1024) > 1024) {
                    kendo.alert('只接受1M以下图片');
                    return;
                }


                var reader = new FileReader;
                reader.readAsDataURL(e[0]);
                reader.onload = function () {
                    var imgData = this.result;

                    // 获取图片的尺寸
                    var image = new Image();
                    image.src = imgData;
                    image.onload = function () {
                        console.log(image.width);
                        console.log(image.height);
                        var imgW = image.width,
                            imgH = image.height;


                        if (imgW == 360 && imgH == 130 || imgW == 720 && imgH == 260 || imgW == 1080 && imgH == 390) {

                            $scope.dataItem.BannerImage = imgData;
                            $scope.$apply();

                        } else {


                            kendo.alert('只接受360 * 130 或 720 * 260 或 1440 * 520 尺寸的图片');
                        }

                    };
                };
            };

            /* ----------- 初始化图文内容 --------------- */
            $scope.initContent = function () {
                $('#editor').html($scope.dataItem.Content);

            };


            /* ------------------- 打开编辑或添加页面 ------------------ */
            $scope.openDialog = function (type) {
                if (type === 'add') {
                    $scope.dialog.title('添加Banner');
                    $scope.dataItem = {
                        SendType: '跳转链接'
                    };
                    $('#imgBox img').attr('src', '');
                } else {
                    $scope.dialog.title('编辑Banner');
                    $('#editor').html($scope.dataItem.Content);
                }
                $scope.dialog.open();
            };

            /* ------------------- 编辑Banner ------------------ */
            $scope.editBanner = function (e) {
                var tr = $(e.target).closest('tr');
                $scope.dataItem = $scope.gridObj.dataItem(tr);
                $scope.openDialog('edit');
            };


            /* ----------------------- 添加或编辑内容 -------------------------- */
            $scope.editorActions = [{
                text: '确定',
                primary: true,
                action: function () {

                }
            },
                {
                    text: '取消',
                    action: function () {
                        $scope.dialog.close();
                    }
                }
            ];


            /* ----------------------- 操作前提示 ---------------------------- */
            $scope.confirm = function (e, type) {
                switch (type) {
                    case 'export':
                        kendo.confirm('<p class="text-danger text-center">确认发布？</p>').then(function () {
                        }, function () {
                            //取消
                        })
                        break;
                    case 'cancel':
                        kendo.confirm('<p class="text-danger text-center">确认取消发布？</p>').then(function () {

                        }, function () {
                            //取消
                        })

                        break;
                    case 'delete':
                        kendo.confirm('<p class="text-danger">确认删除？</p><p>删除后将无法恢复</p>').then(function () {
                        }, function () {
                            //取消
                        })

                        break;
                }
            };


            /* ----------------------- 上移、下移 ----------------------- */
            /* ---------------- 顶部和底部的判断 ------------------ */
            $scope.isFirst = function (ele) {
                return dataSource.indexOf(ele.dataItem) === 0;
            };

            $scope.isLast = function (ele) {
                return dataSource.indexOf(ele.dataItem) === dataSource.data().length - 1;
            };


            /* ---------------- 上移和下移 ------------------ */
            $scope.moveBanner = function (ele, dir) {

                var index = dataSource.indexOf(ele.dataItem);

                var obj1 = ele.dataItem;
                var obj2 = dataSource.at(dir === "up" ? index - 1 : index + 1);

            };

            /* ------------------------------ 显示内容 ------------------------ */
            $scope.showContent = function () {

                var dataItem = this.dataItem;
                var content = document.getElementById('sendContent');

                $scope.showDialog.title('发送内容：' + dataItem.SendType);


                if (dataItem.SendType === '跳转链接') {
                    content.innerHTML = '<a target="_blank"  href="' + dataItem.LinkUrl + '">' + dataItem.LinkUrl + '</a>';
                } else {
                    content.innerHTML = dataItem.Content;
                }

                $scope.showDialog.open();

            };


        }]);


})(angular);