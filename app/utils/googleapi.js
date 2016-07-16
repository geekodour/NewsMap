var axios = require('axios');
var jsonp = require('jsonp');

var newsByCountry = [];


function genOutputArrayObject(data){0
		let countryName = data.title.split(' ')[0];
		let newsTitles = [];
		let newsHTML = "<ul>";
		
		data.entries.forEach(function(news){
			let temp = {html:''};
			temp.link = news.link;
			temp.title = news.title;
			temp.content = news.content;
			newsHTML = newsHTML+'<li>'+news.title.split('-')[0]+'</li>';
			newsTitles.push(temp);
		});
		newsHTML = newsHTML+"</ul>";
		//return countryName;
		//let results = [countryName,newsTitles,newsHTML];
		let results = {'countryName':countryName,'newsTitles':newsTitles,'newsHTML':newsHTML};
		newsByCountry.push(results);
		return results;									
}


function getCountries(){
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
					return data
				})
	;

}

function getNewsForCountry(country){
	let googlenewsUrl = 'https://news.google.com/news?q=' + country + '&output=rss';
	let finalUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=' + encodeURIComponent(googlenewsUrl);
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
    genCacheArray: function(){
		return getCountries()
					.then(function(info){return (info.data)})
					.then(function(data){
						return data.map(function(country){
							return getNewsForCountry(country.name)
								.then(function(a){ 
									let countryName = a.title.split(' ')[0];
									let newsTitles = [];
									let newsHTML = "<ul>";
									a.entries.forEach(function(news){
										let temp = {html:''};
										temp.link = news.link;
										temp.title = news.title;
										temp.content = news.content;
										newsHTML = newsHTML+'<li>'+news.title.split('-')[0]+'</li>';
										newsTitles.push(temp);
									});
									newsHTML = newsHTML+"</ul>";
									//return countryName;
									//let results = [countryName,newsTitles,newsHTML];
									let results = {'countryName':countryName,'newsTitles':newsTitles,'newsHTML':newsHTML};
									newsByCountry.push(results);
									return results;
								});
						})
					})
					.catch(function(err){
		            console.warn('ERROE BRO');
		       	    })

			
    },
    getNews : getCountries




};


module.exports = helpers;
