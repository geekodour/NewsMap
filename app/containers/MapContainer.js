var React = require('react');
var Map = require('../components/Map');
var googleapi = require('../utils/googleapi');
var nlpapi = require('../utils/nlpapi');



var MapContainer = React.createClass({
	getInitialState: function(){
		return {
			isLoading : true
		}
	},
	render: function(){
		return (
		<Map 
			 country="India"
			 dataStuff={nlpapi.logNews()}/>
		)
	},
	componentDidMount : function(){

		//TEST COMMANDS
/*		if(this.state.isLoading){
			console.log('THE CHANGE')
			nlpapi.logNews();
		}
*/

		//TEST COMMANDS			
		google.load('visualization', '1.1', {packages: ['geochart'], callback: drawVisualization});
		function drawVisualization() {
		    var data = google.visualization.arrayToDataTable([
		        ['Country', 'Value', {role: 'tooltip', p:{html:true}}],
		        ['Russia', 5, '<h1>this is a nice string</h1>'],
		        ['United States', 200, `<img src="https://www.google.com/images/srpr/logo6w.png"/>`],
		        ['India',-20,`<h1>POOP</h1>`]]);
		    var chart = new google.visualization.GeoChart(document.getElementById('myMap'));
		    chart.draw(data, {
		        width: '100%',
		        height: 500,
		        tooltip: {isHtml: true}  })
		} 

	}

})

module.exports = MapContainer;