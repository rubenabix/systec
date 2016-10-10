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
        component: 'sysDashboard',
        resolve: {
          curses: /** @ngInject */
            ($stateParams,
             $state,
             $q,
             sysAPI)=> {

            return sysAPI.getCursesList('user', 'password')
              .then((result)=> {
                if (result.data) {
                  return $q.resolve(result.data);
                } else {
                  console.error('error');
                  return $q.reject({});
                }
              })
              .catch((error)=> {
                console.error(error);
                return $q.reject({});
              });

          }
        }
      })

    .state(
      {
        name: 'login',
        url: '/login',
        component: 'sysLogin'
      })

    .state(
      {
        name: 'schedule',
        url: '/schedule',
        component: 'sysSchedule'
      })

    .state(
      {
        name: 'signIn',
        url: '/signIn',
        component: 'sysSignIn'
      });
}
