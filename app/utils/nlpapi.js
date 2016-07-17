var googleapi = require('./googleapi');
var nlp = require('nlp_compromise');
var wordScore = require('./wordscore.js');

var arrayForMapChart = [
			['Country', 'Value', {role: 'tooltip', p:{html:true}}]
];

function scoreCalc(wordsArray){
	
	let score = 0;	
	wordsArray.forEach(function(current){
		current = current.toLowerCase();
		if(current in wordScore){
			console.log("WORDS USED: ",current," SC: ",wordScore[current]);
			score = score + parseInt(wordScore[current]);
		} //end of if block
	})	
	return score;
}


function giveScore(){
	return googleapi.getNews()
		.then(function(data){
		return data.map(function(countryNews){
				let words = [];
				let countryName = countryNews.countryName;
				let countryNewsHTML = countryNews.newsHTML;
				countryNews.newsTitles.forEach( function(element, index) {
					let nouns = nlp.sentence(element.title).nouns();
					let verbs = nlp.sentence(element.title).verbs();
					let adjectives = nlp.sentence(element.title).adjectives();
					//FILTERS 
					verbs = verbs.filter(function(verb){
						return verb.tag != "Copula"
					}); //END OF VERB FILTER


					//FILTERS END
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
					let tempWords = verbs.concat(nouns,adjectives);
					words = words.concat(tempWords);
				}); //END OF FOR EACH
				let score = scoreCalc(words);
				countryNewsHTML = "<p>Happiness:"+score.toString()+"</p>"+countryNewsHTML;
				let tempArray = [countryName,score,countryNewsHTML];
				arrayForMapChart.push(tempArray)
				//console.log(count+=1,":: ",countryName," : ",score,"AND THE WORDS: ",words)
			//	return words;
				return tempArray;
			}); //END OF MAP AFTER THEN
		})
		return 
}

var nlphelpers = {
	logNews : giveScore,
	returnMapArray : function(){
		return arrayForMapChart;
	} 
}


module.exports = nlphelpers ;