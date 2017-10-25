(function (angular) {
    var app = angular.module('brandsManage', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/brands/brandsManage/:id?', {
                    templateUrl: './static/template/brands/brandsManage/index.html',
                    controller: 'brandsManageController'
                })
        }])
        .controller('brandsManageController', ['$scope', '$routeParams','assist',function ($scope, $routeParams,assist) {
            $scope.id = $routeParams.id;
            $scope.statusArr = ["等待审核", "使用中", "已禁用", "已到期", "审核失败"];
            $scope.pageSize = 8;

            $scope.queryFun=function () {
                var dataSource = getDataSource();
                $scope.gridObj.setDataSource(dataSource);
                $scope.pagerObj.setDataSource(dataSource);
            };


            //弹出审核窗口
            $scope.audit=function (e) {
                var tr=$(e.target).closest("tr");
                $scope.dataItem = $scope.gridObj.dataItem(tr);
                $scope.auditDialog.open();
            };
            //查看详情
            $scope.show=function (e) {
                var tr=$(e.target).closest("tr");
                $scope.dataItem=$scope.gridObj.dataItem(tr);
                console.log($scope.dataItem)

                assist.brandsDetailData=$scope.dataItem;
                assist.routeTo("/brands/brandsManage/brandsDetail/"+$scope.dataItem.PkId);
            };
            //弹出修改到期时间窗口
            $scope.editExpireTime=function (e) {
                var tr=$(e.target).closest("tr");
                $scope.dataItem=$scope.gridObj.dataItem(tr);
                $scope.expireTimeDialog.open()
            };
            //禁用与启用
            $scope.enable=function (e) {
                var tr=$(e.target).closest("tr");
                $scope.dataItem=$scope.gridObj.dataItem(tr);
            };
            // 审核信息默认
            $scope.auditInfo={
                IsJointGuarantee:true,//是否加入品牌商
                ExpireTime:""
            };
            //确认通过审核  与修改过期时间
            $scope.auditSure=function (e) {//确认通过审核
                var title=e.sender.title(),data;
                if(title==$scope.auditDialog.title()){
                    // 审核信息
                    data={
                        "PkId": $scope.dataItem.PkId,
                        "Flag": true,
                        "IsJointGuarantee": $scope.auditInfo.IsJointGuarantee,
                        "ExpireTime": $scope.auditInfo.ExpireTime
                    }
                }else{
                    // 修改过期时间信息
                    data={
                        "PkId": $scope.dataItem.PkId,
                        "Flag": true,
                        "ExpireTime": $scope.auditInfo.ExpireTime
                    }
                }
            };
            $scope.refuse=function (e) {
                var tr=$(e.target).closest("tr");
                $scope.dataItem = $scope.gridObj.dataItem(tr);
                $scope.refuseDialog.open()
            };
            $scope.refuseSure=function (e) {

            };

            $scope.showRefuse=function (e) {
                var tr=$(e.target).closest("tr");
                $scope.dataItem = $scope.gridObj.dataItem(tr);
                $scope.showRefuseDialog.open();
            };

            function getDataSource(page) {
                page=page || 1;
                return new kendo.data.DataSource({
                    data: [{"PkId":"b3229cec-b552-401f-aa75-31e5e34e57db","ShopName":"18267136832","Name":"18267136832","Level":null,"CompanyName":null,"CompanyImage":"http://oss.surdata.com/cs/bd.jpg","BrandsTel":null,"ContactName":null,"BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"等待审核","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-10-24 14:46:22","ConfirmCooperTime":null,"ExpireTime":null,"ApprovalStatus":"等待审核","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"40442876@qq.com","IsJointGuarantee":null,"IsFacilitator":null,"AuthCode":null,"WebsiteUrl":null,"SettleWay":null,"InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":null,"IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null},{"PkId":"651ade8c-56a9-4c67-adcc-0614790c7ca3","ShopName":"P4区","Name":"P4区","Level":null,"CompanyName":"品牌商测试6","CompanyImage":"http://oss.surdata.com/cs/bd.jpg","BrandsTel":"13222332323","ContactName":"品牌商","BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"使用中","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-10-23 15:34:54","ConfirmCooperTime":null,"ExpireTime":"2019-01-25 00:00:00","ApprovalStatus":"审核成功","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"sibada10@xunshan.uu.me","IsJointGuarantee":false,"IsFacilitator":false,"AuthCode":null,"WebsiteUrl":null,"SettleWay":null,"InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":"品牌商","IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null},{"PkId":"831565ea-b51a-406c-83eb-cfdb480ed318","ShopName":"鼎折覆餗","Name":"鼎折覆餗","Level":null,"CompanyName":null,"CompanyImage":"http://oss.surdata.com/cs/bd.jpg","BrandsTel":null,"ContactName":null,"BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"等待审核","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-10-21 20:44:54","ConfirmCooperTime":null,"ExpireTime":null,"ApprovalStatus":"等待审核","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"15800000400@qq.com","IsJointGuarantee":null,"IsFacilitator":null,"AuthCode":null,"WebsiteUrl":null,"SettleWay":null,"InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":null,"IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null},{"PkId":"579a775c-a097-46e4-aa16-22224018fdfd","ShopName":"test_caojainbiao","Name":"test_caojainbiao","Level":null,"CompanyName":null,"CompanyImage":"http://oss.surdata.com/cs/bd.jpg","BrandsTel":null,"ContactName":null,"BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"等待审核","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-10-20 19:29:41","ConfirmCooperTime":null,"ExpireTime":null,"ApprovalStatus":"等待审核","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"542705728@qq.com","IsJointGuarantee":null,"IsFacilitator":null,"AuthCode":null,"WebsiteUrl":null,"SettleWay":null,"InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":null,"IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null},{"PkId":"7cec00a1-fea6-464b-8d58-536a641c2435","ShopName":"P3区","Name":"P3区","Level":null,"CompanyName":null,"CompanyImage":"http://oss.surdata.com/cs/bd.jpg","BrandsTel":null,"ContactName":null,"BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"已禁用","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-10-20 19:22:40","ConfirmCooperTime":null,"ExpireTime":"2018-11-06 00:00:00","ApprovalStatus":"审核成功","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"sibada9@xunshan.uu.me","IsJointGuarantee":false,"IsFacilitator":false,"AuthCode":null,"WebsiteUrl":null,"SettleWay":null,"InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":"品牌商","IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null},{"PkId":"d271b221-d9cd-48b5-9428-88eef7d5b383","ShopName":"uume","Name":"uume","Level":null,"CompanyName":"惠佳打印股份有限公司","CompanyImage":"http://oss.surdata.com/cs/common/636440295223981568.jpg","BrandsTel":"15033155510","ContactName":"CS_惠佳","BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"使用中","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-10-17 10:38:49","ConfirmCooperTime":null,"ExpireTime":null,"ApprovalStatus":"审核成功","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"cen@2264231692.uu.me","IsJointGuarantee":false,"IsFacilitator":false,"AuthCode":null,"WebsiteUrl":null,"SettleWay":null,"InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":"品牌商","IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null},{"PkId":"df9926a0-195d-4154-95c4-6a986fabd05e","ShopName":"品牌商测试6服","Name":"品牌商测试6服","Level":null,"CompanyName":"超级售后","CompanyImage":"http://oss.surdata.com/cs/bd.jpg","BrandsTel":"13266776787","ContactName":"朴小姐","BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"使用中","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-10-11 17:25:17","ConfirmCooperTime":null,"ExpireTime":"2018-08-12 00:00:00","ApprovalStatus":"审核成功","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"sibada8@xunshan.uu.me","IsJointGuarantee":false,"IsFacilitator":false,"AuthCode":null,"WebsiteUrl":null,"SettleWay":"SubmitPriceTime","InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":"品牌商","IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null},{"PkId":"3ffd2aa4-ae90-4d2e-b60b-fc41f31d536f","ShopName":"heyufeng1","Name":"heyufeng1","Level":null,"CompanyName":null,"CompanyImage":"http://oss.surdata.com/cs/bd.jpg","BrandsTel":null,"ContactName":null,"BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"已禁用","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-10-11 12:25:00","ConfirmCooperTime":null,"ExpireTime":null,"ApprovalStatus":"审核成功","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"heyufeng1@163.com","IsJointGuarantee":false,"IsFacilitator":false,"AuthCode":null,"WebsiteUrl":null,"SettleWay":null,"InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":"商业客户","IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null},{"PkId":"b0bbf98f-50e6-4f50-a827-68eca397e47f","ShopName":"346035969","Name":"346035969","Level":null,"CompanyName":"上海产品测试服务有限公司","CompanyImage":"http://oss.surdata.com/cs/bd.jpg","BrandsTel":"15511111111","ContactName":"李先生","BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"使用中","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-10-09 13:48:44","ConfirmCooperTime":null,"ExpireTime":null,"ApprovalStatus":"审核成功","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"346035969@qq.com","IsJointGuarantee":false,"IsFacilitator":false,"AuthCode":null,"WebsiteUrl":null,"SettleWay":"CreateTime","InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":"品牌商","IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null},{"PkId":"c0fcebeb-e991-41a3-b73d-5ec0ac086b1d","ShopName":"红猪","Name":"红猪","Level":null,"CompanyName":"CS_红猪","CompanyImage":"http://oss.surdata.com/cs/common/636439188497217237.jpg","BrandsTel":"15809230001","ContactName":"红猪","BrandsIcon":null,"Payment":null,"ServiceRegions":null,"ProductCates":null,"ServiceTypes":null,"AuthServiceRegions":null,"AuthProductCates":null,"AuthServiceTypes":null,"TradeCount":null,"GoodRate":null,"IsCollection":null,"BrandsStatus":"使用中","SettleMethod":null,"ServicePolicys":null,"PriceManageInfo":null,"RefusedReason":null,"RefusedTime":null,"CancelReason":null,"CancelTime":null,"JoinTime":null,"CreateTime":"2017-09-23 20:42:59","ConfirmCooperTime":null,"ExpireTime":null,"ApprovalStatus":"审核成功","DispatchModel":"手动派单","CooperateStatus":null,"DockingShop":null,"UserEmail":"2525225@zoela.uu.me","IsJointGuarantee":false,"IsFacilitator":false,"AuthCode":null,"WebsiteUrl":null,"SettleWay":"SubmitPriceTime","InvoiceInfo":null,"KefuDispatchTradeRule":null,"DispatchChannelRuleList":null,"BrandsAccountType":"品牌商","IsEnabledSpareParts":null,"FlowSource":null,"OmServerAddress":null,"OmCallBackLink":null}],
                    pageSize: $scope.pageSize
                });
            }
            var dataSource =getDataSource();
            $scope.gridOptions = {
                dataSource: dataSource,
                scrollable: false,
                sortable: true,
                pageable: true,
                columns: [
                    {
                        field: "CompanyName",
                        title: "公司名称"
                    },
                    {
                        field: "BrandsStatus",
                        title: "状态"
                    },
                    {
                        field: "UserEmail",
                        title: "登陆邮箱"
                    },
                    {
                        field: "ContactName",
                        title: "联系人姓名"
                    },
                    {
                        field: "BrandsTel",
                        title: "联系人电话"
                    },
                    {
                        field: "CreateTime",
                        title: "注册时间",
                        format: "{0: yyyy-MM-dd HH:mm:ss}"
                    },
                    {
                        title: "操作",
                        template:function (dataItem) {
                            if(dataItem.BrandsStatus=="等待审核"){
                                return "<a href='javascript:void(0)' class='text-primary' ng-click='audit($event)'>通过</a> | <a href='javascript:void(0)' class='text-danger' ng-click='refuse($event)'>拒绝</a>"
                            }else if(dataItem.BrandsStatus=="使用中"){
                                return "<a href='javascript:void(0)' class='text-primary' ng-click='show($event)'>查看详情</a> | <a href='javascript:void(0)' class='text-danger' ng-click='enable($event)'>禁用</a>"
                            }else if(dataItem.BrandsStatus=="已禁用"){
                                return "<a href='javascript:void(0)' class='text-primary' ng-click='show($event)'>查看详情</a> | <a href='javascript:void(0)' class='text-primary' ng-click='enable($event)'>启用</a>"
                            }else if(dataItem.BrandsStatus=="已过期"){
                                return "<a href='javascript:void(0)' class='text-primary' ng-click='show($event)'>查看详情</a> | <a href='javascript:void(0)' class='text-primary' ng-click='editExpireTime($event)'>修改到期时间</a>"
                            }else if(dataItem.BrandsStatus=="审核失败"){
                                return "<a href='javascript:void(0)' class='text-primary' ng-click='showRefuse($event)'>查看拒绝理由</a>"
                            }
                        }
                    }
                ]
            };
            $scope.actions = [
                { text: '确认', primary: true ,action:$scope.auditSure},
                { text: '取消' }
            ];

        }])


})(angular);

