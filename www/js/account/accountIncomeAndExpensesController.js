/**
 * Created by Administrator on 2016/3/17.
 */
angular.module('VPan20_Front')
  .controller('accountIncomeAndExpensesController',['$scope', '$ionicHistory', 'testService',function($scope, $ionicHistory, testService) {

    $scope.my = { popModalData: {} }
    $scope.list = [];

    //获取后台对应数据
    function getAccountIncomeAndExpensesList(){
      var _q = testService.getAccountIncomeAndExpensesList();
      _q.then(function(data){
        $scope.list = data.list;
      },function(){
      });
    }

    $scope.showDetail = function(record){
      $scope.my = record;
      $scope.openModal();//设置弹出窗口内容
    }

    $scope.goBack = function(){
      $ionicHistory.goBack();
    }

    /***********初始化**********/
    getAccountIncomeAndExpensesList();

  }])

