var React = require('react');
var PropTypes = React.PropTypes;

var Map = React.createClass({
	render: function(){
		if(this.props.isLoading){
			return ( 
				<div className="ui segment" style={{"height":"400px"}}>
				  <div className="ui active dimmer">
				    <div className="ui large text loader">Fetching news of All Countries</div>
				  </div>
				  <p></p>
				</div>)
			}
			
		else 
			return <div id="myMap"></div>
			
		
	},


})
module.exports = Map;