var React = require('react');
var googleapi = require('../utils/googleapi');

var Main = React.createClass({
	componentDidMount : function(){
		googleapi.genCacheArray().then(function(data){console.log(data)})
	},
	render: function(){
		return (
				<div className="">
				<div className="ui menu">
					<h1>NewsMap</h1>
					<div className="right menu">
						<button className="ui button">How it Works</button>
						<button className="ui button">About</button>
					</div>
				</div>
				{this.props.children}
				<div className="footer centered">copyright text</div>
				</div>
			) 
	}
});

module.exports = Main;
