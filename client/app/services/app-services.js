angular.module('twittler.services', [])

.factory('Tweets', function($http){
    function twittlerStartup(){
      return $http.get('api/start');
    }

    function getUserProfile(user) {
		return $http({
			method: 'GET',
			url: 'api/profiles',
			headers: {user: user}
		});
	}

	function getUserFeed(user) {
		return $http({
			method: 'GET',
			url: 'api/users',
			headers: {user: user}
		});
	}
  
  return {
  	twittlerStartup: twittlerStartup,
  	getUserProfile: getUserProfile,
  	getUserFeed: getUserFeed
  };

});