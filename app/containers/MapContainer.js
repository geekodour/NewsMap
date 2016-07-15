var React = require('react');
var Map = require('../components/Map');
var googleapi = require('../utils/googleapi')

var MapContainer = React.createClass({
	render: function(){
		return (
		<Map country="India"/>
		)
	},
	componentDidMount : function(){
		google.load('visualization', '1.1', {packages: ['geochart'], callback: drawVisualization});
		console.log('LOADED BRO');
		function drawVisualization() {
		    var data = google.visualization.arrayToDataTable([
		        ['Country', 'Value', {role: 'tooltip', p:{html:true}}],
		        ['Russia', 5, '<h1>this is a nice string</h1>'],
		        ['US', 20, '<img src="https://www.google.com/images/srpr/logo6w.png"/>']]);
		    var chart = new google.visualization.GeoChart(document.getElementById('myMap'));
		    chart.draw(data, {
		        width: '100%',
		        height: 500,
		        tooltip: {isHtml: true}  })
		} 

	}

})

module.exports = MapContainer;