var googleapi = require('./googleapi');
var nlp = require('nlp_compromise');
var wordScore = require('./wordscore.js')

var mydata = [];
function genArray(){
	googleapi.getNews()
		.then(function(data){
			mydata = data;
			console.log(mydata)
		})
		.catch(function(err){
			console.log('SOME HIT HAPPENED')
		})
}

function giveScore(){
	googleapi.getNews()
		.then(function(data){
			var count = 0;
		data.map(function(countryNews){
				let score = 0;
				let words = [];
				let countryName = countryNews.countryName;
				let countryNewsHTML = countryNews.newsHTML;
				countryNews.newsTitles.forEach( function(element, index) {
					let nouns = nlp.sentence(element.title).nouns();
					let verbs = nlp.sentence(element.title).verbs();
					let adjectives = nlp.sentence(element.title).adjectives();
					verbs = verbs.filter(function(verb){
						return verb.tag != "Copula"
					}); //END OF VERB FILTER
					nouns = nouns.map(function(noun){
						return noun.text;
					}); //END OF NOUN MAP
					verbs = verbs.map(function(verb){
						return verb.text;
					}); //END OF VERB MAP
					adjectives = adjectives.map(function(adjective) {
						return adjective.text;
					});
					//CONCAT VERB AND NOUN
					let tempWords = verbs.concat(adjectives);
					words = words.concat(tempWords);
				}); //END OF FOR EACH
				console.log(words);
				console.log(count+=1);
			//	return words;
			}); //END OF MAP AFTER THEN
		})
		return 
}

var nlphelpers = {
	logNews : giveScore 
}


module.exports = nlphelpers ;