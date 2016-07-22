var React = require('react');

function how(props){
	return (
		<div className="ui raised center aligned segment">
			<h2 className="ui center aligned header">
				How NewsMap Works?
			</h2>
			<div style={{"width":"300px","margin":"auto"}}>
			This uses Google news for fetching news for each country 
			and then uses <a href="https://github.com/nlp-compromise/nlp_compromise">nlp compromise</a> for getting nouns,verbs and adjectives
			out of the 10 news headlines fetched then I used a list that I combined from two sources and given words some score according 
			to the positivity and negativity of the word where the score was not present.

			Finally used Google GeoCharts to plot the score in the worldmap. 

			It is made using react and the source code can be found <a href="https://github.com/geekodour/newsmap-react">here.</a>
			</div>
		</div>
		)
}


module.exports = how;
