/**
 * Created by icley on 2016/3/28.
 */
angular.module('VPan20_Front')
  .controller('tradeTicketController', function($scope, $ionicHistory, $ionicScrollDelegate,sdk_factory) {


    $scope.my = { isShowMaskDiv: false, //是否显示遮罩层
      isShowInstructions: false, //是否显示分享指引
      isShowRule: false };//是否显示赢家券使用规则

    //显示提示信息（分享指引）
    $scope.showInstructions = function(){

      $ionicScrollDelegate.scrollTop( true );//上滚到顶部

      $scope.my.isShowMaskDiv = true;//显示遮罩层
      $("#tradeTicketContent").css("overflow", "hidden");//不允许 ion-content 滚动

      $scope.my.isShowInstructions = true; //显示分享指引


    }

    //赢家券使用规则
    $scope.showRule = function(){

      $scope.my.isShowMaskDiv = true;//显示遮罩层
      $("#tradeTicketContent").css("overflow", "hidden");//不允许 ion-content 滚动

      $scope.my.isShowRule = true;//显示赢家券使用规则

      //修改样式
      $("#ruleBox").css("display", "block");
      $("#ruleBox").css("top", "300px");
    }

    $scope.closeRule = function(){

      $scope.my.isShowMaskDiv = false;//隐藏遮罩层
      $("#tradeTicketContent").css("overflow", "scroll");//允许 ion-content 滚动

      $scope.my.isShowRule = false;//隐藏赢家券使用规则

      //修改样式
      $("#ruleBox").css("top", "700px");
    }

    $scope.goBack = function(){
      $ionicHistory.goBack();
    }
    //调用分享页面
    var WxUtil=sdk_factory.carry();
    var wxUtil=new WxUtil();
    wxUtil.winnerStamp();


  })
