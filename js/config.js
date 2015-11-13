let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/new_list.tpl.html'
    })
    .state('root.single', {
      url: '/single/:listId',
      controller: 'SingleController',
      templateUrl: 'templates/single_list.tpl.html'
    })
    .state('root.edit', {
      url: '/edit/:itemId',
      controller: 'EditController',
      templateUrl: 'templates/edit_list.tpl.html'
    })
    .state('root.editList', {
      url: '/editlist/:listId',
      controller: 'EditListController',
      templateUrl: 'templates/edit_full_list.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;