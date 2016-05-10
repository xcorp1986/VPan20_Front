/**
 * Created by Administrator on 2016/3/17.
 */
angular.module('VPan20_Front')
  .controller('accountBrokerIncomeController', function($scope, $ionicHistory, testService, toolServices) {

    $scope.my = { month: null, toggle: false,
      commissionUp: true, incomeUp: true };//佣金 收入升序

    var _month;//存储用户选择的月份

    $scope.totalIncomeList = [];//总收入数据
    $scope.list = [];
    $scope.timeList = [];

    //获取后台对应数据

    //总收入
    function getAccountBrokerIncomeTotalIncomeDataList(){
      var _q = testService.getAccountBrokerIncomeTotalIncomeDataList();
      _q.then(function(data){
        $scope.totalIncomeList = data.data;
      },function(){
      });
    }

    //列表数据
    function getAccountBrokerIncomeList( month, column, desc ){
      var _q = testService.getAccountBrokerIncomeList( month, column, desc );
      _q.then(function(data){
        $scope.list = data.data;
      },function(){
      });
    }


    //选择本周、上周
    $scope.selectTimeTab = function( index ){
      //修改样式
      $("#timeTabs").children().filter(".active").removeClass("active");
      $("#timeTabs a:nth-child(" + index + ")").addClass("active");
    }

    //获取 选择月份 的下拉选项
    function getSelectMonthData(){
      $scope.timeList = toolServices.getSelectMonthData();
    }

    //设置 选择月份 的样式
    function setSelectMonthStyle(){
      var _top = $("#select").position().top;
      var _left = $("#select").position().left;
      var _width = $("#select").width();
      $("#selectOption").css( 'top', _top );
      $("#selectOption").css( 'left', _left );
      $("#selectOption").css( 'width', _width );
    }

    //选择月份 显示或隐藏 下拉菜单
    $scope.toggle = function(){
      $('#selectOption').toggle(100);// 显示/隐藏交互事件。参数是下拉速度
      $scope.my.toggle = !$scope.my.toggle;
    }

    //选择月份 下拉某一项
    $scope.selectMonth = function( t, flag ){
      var _str = t.split("-");
      $scope.my.month = _str[0] + '年' + _str[1] + '月';
      _month = t;

      //获取对应后台数据
      getAccountBrokerIncomeList( _month, '2', '1' );//（默认佣金升序）

      if( flag ){
        $scope.toggle();//关闭下拉列表
      }
    }

    //column=1 表示收入，column=2 表示佣金笔数； desc：1、2 升序降序

    //佣金笔数 排序
    $scope.commissionSort= function(){
      $scope.my.commissionUp = !$scope.my.commissionUp;//取反
      if( $scope.my.commissionUp ){//升序
        getAccountBrokerIncomeList( _month, '2', '1' );
        console.log("佣金升序");
      }else{//降序
        getAccountBrokerIncomeList( _month, '2', '2' );
        console.log("佣金降序");
      }
    }

    //收入金额 排序
    $scope.incomeSort= function(){
      $scope.my.incomeUp = !$scope.my.incomeUp;//取反
      if( $scope.my.incomeUp ){//升序
        getAccountBrokerIncomeList( _month, '1', '1' );
        console.log("收入金额升序");
      }else{//降序
        getAccountBrokerIncomeList( _month, '1', '2' );
        console.log("收入金额降序");
      }
    }

    $scope.goBack = function(){
      $ionicHistory.goBack();
    }

    /*************初始化**************/

    //获取后台对应数据
    getAccountBrokerIncomeTotalIncomeDataList();

    getSelectMonthData();//获取 选择月份 的下拉选项
    setSelectMonthStyle();//设置 选择月份 的样式

    //获取当前日期
    var date = new Date();
    var _year = date.getFullYear();//获取当前年份
    var _month = date.getMonth();//获取当前月份
    $scope.selectMonth( _year + '-' + _month, false );//选择月份 默认选中值 下拉某一项

    $scope.selectTimeTab(1);//选择本周、上周tabs

  })
