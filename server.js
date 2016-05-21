var express = require('express');

var app = express();

//app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
	res.send('Hello World');
});

app.listen(8080, function(){
	console.log("Listening on 8080");
});