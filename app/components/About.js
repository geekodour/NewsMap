var React = require('react');

function about(props){
	return (
		<div className="ui raised center aligned segment">
			<h2 className="ui center aligned header">
				About	
			</h2>
			<div style={{"width":"300px","margin":"auto"}}>
			This is my first react app that I am putting online. There are many mistakes.
			I'll keep making more apps like this. I also like making mall tools in bash. 
			I'll upload them on GitHub too. 
			Thankyou. You can find me on <a href="https://github.com/geekodour">Github.</a>
			</div>
		</div>
		)
}


module.exports = about;