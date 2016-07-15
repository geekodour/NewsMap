var React = require('react');

var Main = React.createClass({
	render: function(){
		return (
				<div className="main-container">
				<h1>This is the Header</h1>
				{this.props.children}
				<h3>The foother</h3>
				</div>
			) 
	}
});

module.exports = Main;
