var React = require('react');
var googleapi = require('../utils/googleapi');
var nlpapi = require('../utils/nlpapi');
var styles = require('../styles/styles');


var Main = React.createClass({
	componentDidMount : function(){
//		googleapi.getNews().then(function(data){console.log(data)})
//		nlpapi.logNews().then(function(a){console.log(a)});
	},
	render: function(){
		return (
				<div className="">
				<div className="ui inverted menu" style={styles.noRoundBorders}>
					<h1 style={styles.whiteText} >NewsMap</h1>
					<div className="right menu">
						<button className="ui basic inverted red button">How it Works</button>
						<button className="ui basic inverted red button">About</button>
					</div>
				</div>
				{this.props.children}
				<div className="footer centered">copyright text</div>
				</div>
			) 
	}
});

module.exports = Main;
