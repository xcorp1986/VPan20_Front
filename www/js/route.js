/**
 * Created by Administrator on 2016/2/26.
 */
VPan20_Front

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');


    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        cache: false,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.trade', {
        url: '/trade',
        views: {
          'tab-trade': {
            templateUrl: 'templates/trade/index.html',
            controller: 'tradeIndexController'
          }
        }
      })
      .state('tab.trade-build', {
        url: '/trade-build/:product/:productid/:direction/:type',
        cache: false,
        views: {
          'tab-trade': {
            templateUrl: 'templates/trade/trade-build.html',
            controller: 'tradeBuildController'
          }
        }
      })

      .state('tab.trade-ticket', {
        url: '/trade-ticket',
        views: {
          'tab-trade': {
            templateUrl: 'templates/trade/trade-ticket.html',
            controller: 'tradeTicketController'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/index.html',
            controller: 'accountIndexController'
          }
        }
      })

      .state('tab.account-history', {
        url: '/account-history',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-history.html',
            controller: 'accountHistoryController'
          }
        }
      })

      .state('tab.account-personalInfo', {
        url: '/account-personalInfo',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-personalInfo.html',
            controller: 'accountPersonalInfoController'
          }
        }
      })

      .state('tab.account-incomeAndExpenses', {
        url: '/account-incomeAndExpenses',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-incomeAndExpenses.html',
            controller: 'accountIncomeAndExpensesController'
          }
        }
      })

      .state('tab.account-recharge', {
        url: '/account-recharge',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-recharge.html',
            controller: 'accountRechargeController'
          }
        }
      })

      //充值（重复）
      .state('tab.trade-recharge', {
        url: '/trade-recharge',
        views: {
          'tab-trade': {
            templateUrl: 'templates/account/account-recharge.html',
            controller: 'accountRechargeController'
          }
        }
      })

      .state('tab.account-withdraw', {
        url: '/account-withdraw',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-withdraw.html',
            controller: 'accountWithdrawController'
          }
        }
      })

      .state('tab.account-personalInfo-changePwd', {
        url: '/account-personalInfo-changePwd',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-personalInfo-changePwd.html',
            controller: 'accountPersonalInfoChangePwdController'
          }
        }
      })

      .state('tab.account-personalInfo-changePhoneNum1', {
        url: '/account-personalInfo-changePhoneNum1',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-personalInfo-changePhoneNum1.html',
            controller: 'accountPersonalInfoChangePhoneNumController'
          }
        }
      })

      .state('tab.account-personalInfo-changePhoneNum2', {
        url: '/account-personalInfo-changePhoneNum2',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-personalInfo-changePhoneNum2.html',
            controller: 'accountPersonalInfoChangePhoneNumController'
          }
        }
      })

      .state('tab.account-winTicket', {
        url: '/account-winTicket',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-winTicket.html',
            controller: 'accountWinTicketController'
          }
        }
      })

      .state('tab.account-winTicket-detail', {
        url: '/account-winTicket-detail/:type/:id',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-winTicket-detail.html',
            controller: 'accountWinTicketDetailController'
          }
        }
      })

      .state('tab.account-broker', {
        url: '/account-broker',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-broker.html',
            controller: 'accountBrokerController'
          }
        }
      })

      .state('tab.position', {
        url: '/position',
        views: {
          'tab-position': {
            templateUrl: 'templates/position/index.html',
            controller: 'positionIndexController'
          }
        }
      })

      .state('tab.position-details', {
        url: '/position-details/:id',
        views: {
          'tab-position': {
            templateUrl: 'templates/position/position-details.html',
            controller: 'positionDetailsController'
          }
        }
      })

      .state('tab.account-broker-income', {
        url: '/account-broker-income',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-broker-income.html',
            controller: 'accountBrokerIncomeController'
          }
        }
      })

      .state('tab.account-broker-client', {
        url: '/account-broker-client',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-broker-client.html',
            controller: 'accountBrokerClientController'
          }
        }
      })

      .state('tab.account-broker-close', {
        url: '/account-broker-close',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-broker-close.html',
            controller: 'accountBrokerCloseController'
          }
        }
      })

      .state('tab.account-broker-changeLink', {
        url: '/account-broker-changeLink',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-broker-changeLink.html',
            controller: 'accountBrokerChangeLinkController'
          }
        }
      })

      .state('tab.account-broker-register', {
        url: '/account-broker-register',
        views: {
          'tab-account': {
            templateUrl: 'templates/account/account-broker-register.html',
            controller: 'accountBrokerRegisterController'
          }
        }
      })

        .state('tab.information', {
            url: '/information',
            views: {
                'tab-information': {
                    templateUrl: 'templates/information/index.html',
                    controller: 'informationIndexControllers'
                }
            }
        })


        .state('tab.information-details', {
            url: '/information-details/:formType/:pubId',
            views: {
                'tab-information': {
                    templateUrl: 'templates/information/information-details.html',
                    controller: 'informationDetailsControllers'
                }
            }
        })

        .state('tab.information-past', {
            url: '/information-past',
            views: {
                'tab-information': {
                    templateUrl: 'templates/information/information-past.html',
                    controller: 'informationPastControllers'
                }
            }
        })


    /**
     * 手机注册
     */
      .state('register', {
        url:'/register',
        abstract: true,
        templateUrl:'templates/register/index.html',
      })

      .state('register.register', {
        url:'/register',
        views:{
          'register': {
            templateUrl: 'templates/register/register.html',
            controller:'registerController'
          }
        }
      })

    /**
     * 忘记密码
     */
      .state('forgetPwd', {
        url:'/forgetPwd',
        abstract: true,
        cache: false,
        templateUrl:'templates/forgetPwd/index.html',
      })

      .state('forgetPwd.forgetPwd1', {
        url: '/forgetPwd1',
        views: {
          'forgetPwd': {
            templateUrl: 'templates/forgetPwd/forgetPwd1.html',
            controller: 'forgetPwdController'
          }
        }
      })

      .state('forgetPwd.forgetPwd2', {
        url: '/forgetPwd2',
        views: {
          'forgetPwd': {
            templateUrl: 'templates/forgetPwd/forgetPwd2.html',
            controller: 'forgetPwdController'
          }
        }
      })


    //外部页面
      .state('tab.receiveWinTicket', {
        url:'/receiveWinTicket',
        views:{
          'tab-trade': {
            templateUrl: 'templates/receiveWinTicket.html'
          }
        }
      })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/trade');

  });
