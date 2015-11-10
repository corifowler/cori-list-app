let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'PageController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.search', {
      url: '/search',
      controller: 'PageController',
      templateUrl: 'templates/search.tpl.html'
    });
    
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;