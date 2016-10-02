export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  //$locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state(
      {
        name: 'dashboard',
        url: '/',
        component: 'sysDashboard'
      })

    .state(
      {
        name: 'login',
        url: '/login',
        component: 'sysLogin'
      });
}
