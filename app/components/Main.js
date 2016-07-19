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
						<div className="ui item">
						<div className="ui basic inverted red button" style={styles.bebutton}>How it Works</div>
						</div>
						<div className="ui item">
						<div className="ui basic inverted red button" style={styles.bebutton}>About</div>
						</div>
					</div >
				</div>
				{this.props.children}
				<div className="ui two column centered grid">
					<div className="column">
				  Made by <a href="https://github.com/geekodour">Hrishikesh Barman</a> - July 2016
				  	</div>
				</div>
				</div>
			) 
	}
});

module.exports = Main;
