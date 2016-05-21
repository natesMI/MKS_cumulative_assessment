angular.module('twittler', ['twittler.services', 'twittler.home', 'twittler.search', 'ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/home/home-view.html',
      controller: 'TwittlerHome'
    })

    .when('/search', {
      templateUrl: 'app/search/search-view.html',
      controller: 'TwittlerSearch'
    })
    
    .otherwise({redirectTo: '/home'});
    
});
