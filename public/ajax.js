
$(document).ready(function() {

	$("#getTweet").click(function() {

		//fetch the response object from server
		$.ajax({
			method: "GET",
			url: '/twitter'
			// setup asynchronous promise  
		}).then (function(response){ 

			console.log(response);
			//grab only tweet text out of returned json object
			var tweets = response.statuses;

			for(var i = 0; i < tweets.length; i++){
				//do something with response here
				$('#text').append('<li>' + tweets[i].text + '</li>');
			}

		});
	});
});
    