angular.module('twittler.home', [])

.controller('TwittlerHome', function($scope, Tweets){
  $scope.start = function(){
  	
  	Tweets.twittlerStartup().then(function(data){
  		$scope.feed = data.data;
  	});
  };
  $scope.start();
});