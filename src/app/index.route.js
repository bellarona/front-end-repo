export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('feedback', {
      url: '/',
      templateUrl: 'app/feedback/feedback.html',
      controller: 'FeedbackController',
      controllerAs: 'feedback'
    })
    .state('auth', {
      url: '/auth',
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    });



  $urlRouterProvider.otherwise('/');
}
