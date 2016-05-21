angular.module('twittler.search', [])

.controller('TwittlerSearch', function($scope, Tweets){
  console.log("search view is connected");

  $scope.search = function(searchUser){
    
    if(searchUser[0] !== '@' || searchUser.indexOf(' ') !== -1){
      $scope.errMessage = "Please enter a valid Twitter handle";
      return; 
    }
  	searchUser = searchUser.slice(1);

    Tweets.getUserProfile(searchUser).then(function(data){
      console.log("This is the user profile: ", data.data[0]);
      $scope.profile = data.data[0];
    });


    Tweets.getUserFeed(searchUser).then(function(data){
    	console.log("This is search data: ", data);
    	$scope.feed = data.data;
    });
  };

});