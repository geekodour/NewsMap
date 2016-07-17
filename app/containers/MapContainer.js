var React = require('react');
var Map = require('../components/Map');
var googleapi = require('../utils/googleapi');
var nlpapi = require('../utils/nlpapi');

var arrayFromNLP = nlpapi.returnMapArray();

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
			 />
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
		    var data = google.visualization.arrayToDataTable(arrayFromNLP);
		    var chart = new google.visualization.GeoChart(document.getElementById('myMap'));
		    chart.draw(data, {
		        width: '100%',
		        height: 500,
		        tooltip: {isHtml: true}  })
		} 

	}

})

module.exports = MapContainer;