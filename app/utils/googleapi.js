var axios = require('axios');
var jsonp = require('jsonp');

//var newsByCountry = ['bman bro'];


function getCountries(){
	return axios.get('https://raw.githubusercontent.com/geekodour/newsmap-react/master/app/utils/countries.json');

}

function getNewsForCountry(country){
	let googlenewsUrl = 'https://news.google.com/news?q=' + country + '&output=rss';
	let finalUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=' + encodeURIComponent(googlenewsUrl);
	jsonp(
			finalUrl
			,null
			,function(err,data){
				if(err){console.error('THERE WAS THE ERROR')}
				else {console.log(data);}
			}
		);
}


var helpers = {
    getMapArray: function(){
		return axios.all(
				getCountries()
					.then(function(info){return (info.data)})
					.then(function(data){
						data.map(function(country){
							return getNewsForCountry(country.name)
						})
					})
					.then(function(yata){
						console.log(yata)
					})
			)
    },
    getNews : function(){
    	return newsByCountry; 
    }



};


module.exports = helpers;
