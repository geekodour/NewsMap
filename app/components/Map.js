var React = require('react');
var PropTypes = React.PropTypes;

var Map = React.createClass({
	render: function(){
		return this.props.isLoading
			? <p> It's Loading brother </p>
			: <div id="myMap"></div>
		
	},


})
module.exports = Map;