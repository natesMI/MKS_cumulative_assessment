var express = require('express');
var Twitter = require('twitter');

var app = express();

app.use(express.static(__dirname + '/client'));

var client = new Twitter({
  consumer_key: credentials.keys.MY_CONSUMER_KEY || process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: credentials.keys.MY_CONSUMER_SECRET || process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: credentials.keys.MY_ACCESS_TOKEN || process.env.TWITTER_TOKEN_KEY,
  access_token_secret: credentials.keys.MY_TOKEN_SECRET || process.env.TWITTER_TOKEN_SECRET
});

app.get('/api/start', function(req, res){
  client.get('statuses/home_timeline', {count: 25}, function(error, tweets, response) {
   res.send(tweets);
  });
});

app.get('/api/profiles', function(req, res){
  client.get('users/lookup', {screen_name: req.headers.user}, function(error, tweets, response) {
   res.send(tweets);
  });
});

app.get('/api/users', function(req, res){
  client.get('statuses/user_timeline', {screen_name: req.headers.user, count: 25}, function(error, tweets, response) {
   res.send(tweets);
  });
});

app.listen(8080, function(){
	console.log("Listening on 8080");
});