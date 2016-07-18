var axios = require('axios');
var jsonp = require('jsonp');

var newsByCountry = [];

//THE FUNCTION BELOW CONTAINS TWO DIFFERENT FUNCTIONALTIES, GETING COUNTRY JSON
//AND THE UJING PROMISES ON THEM, AND THEN MAKING THE ARRAY, NEED OF SEPARATION
// IS REQUIRED LATER


// ALO THIS HIT GETS CALLED TWICE FOR SOME UNKNOWN REASON 
//TWICE iS FIXED, Don't KNOW HOW.

function getCountryNews(){
	return axios.get('https://raw.githubusercontent.com/geekodour/newsmap-react/master/app/utils/countries.json')
				.then(function(info){
					return info.data;
				})
				.then(function(data){
					return axios.all(data.map(function(country){
						return getNewsForCountry(country.name);
					}))
				})
				.then(function(data){
					return data.map((newsData) => {
						let count = 0;
						let countryName = newsData.title.split(' - ')[0];
						let newsTitles = [];
						let newsHTML = "<ul>";
						newsData.entries.forEach(function(news){
							let temp = {};
							temp.link = news.link;
							temp.title = news.title;//.split(' - ')[0];
							temp.content = news.content;
							newsHTML = newsHTML+'<li>'+temp.title+'</li>';
							newsTitles.push(temp);
						});
						newsHTML = newsHTML+"</ul>";
						//return countryName;
						//let results = [countryName,newsTitles,newsHTML];
						let results = {'countryName':countryName,'newsTitles':newsTitles,'newsHTML':newsHTML};
						return results;
					})
				})
	;

}

function getNewsForCountry(country){
	let googlenewsUrl = 'https://news.google.com/news?q=' + country + '&output=rss';
	let finalUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=' + encodeURIComponent(googlenewsUrl);
	return new Promise(function(resolve,reject){
		jsonp(
			finalUrl
			,null
			,function(err,data){
				if(err){reject(err)}
				else {
					if(data.responseData){
					resolve(data.responseData.feed)}}
			}
		);	
	});
	
}


var helpers = {
    getNews : getCountryNews
    ,
    getNewsByCountryArray : function(){
    	return newsByCountry;
    }




};


module.exports = helpers;
