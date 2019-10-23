import authInterceptor from './auth.interceptor'

function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $httpProvider.interceptors.push(authInterceptor);

  /*
    If you don't want hashbang routing, uncomment this line.
    Our tutorial will be using hashbang routing though :)
  */
  // $locationProvider.html5Mode(true);


  // Fuzeday notes: By default the router adds an exclamation mark. We need to remove it
  $locationProvider.hashPrefix('');


  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html',
    resolve: {
      auth: function(User) {
        return User.verifyAuth();
      }
    }
  });

  // Fuzeday notes: this line is removed to disable default route to home
  // $urlRouterProvider.otherwise('/');

}

export default AppConfig;
