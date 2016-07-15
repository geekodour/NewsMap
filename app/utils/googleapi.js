var axios = require('axios');
var countries = require('./countries.json')


function getCountries(){
	console.log(countries);

}




//googlenewsUrl = "https://news.google.com/news?q=" + countryName + "&output=rss";
//finalUrl = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSONP_CALLBACK&q=' + encodeURIComponent(googlenewsUrl);


var helpers = {
    getPlayersInfo: function(){
		getCountries();     
    }


};


module.exports = helpers;
