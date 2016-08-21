//Require Express server
var express = require('express');
//Require Twit OAuth manager for Twitter
var Twit = require('twit');

var app = express();
app.use(express.static('public'));


require('dotenv').config();


var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})



//Setup Express API Endpoint
app.get('/twitter', function(req, res) {

	T.get('search/tweets', { q: '#Paris since:2016-05-30', count: 1 }, function(err, data, response) {
		if (err) {
			console.log('There was an error retrieving requested data. Msg from: server.js');
		}
	  console.log(data)
	  res.send(data);
	});  
});

app.listen(3000, function(){
	console.log('Express server listening on port 3000');
});