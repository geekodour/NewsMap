var React = require('react');
var ReactRouter = require('react-router');

var MapContainer = require('../containers/MapContainer');

var Home = React.createClass({
    render: function(){
        return (
                <div>
                <div className="ui segment">
               	This is a newsMap, it has the of top 10 headlines and uses very basic sentiment analysis to 
               	detect Happiness of different countries.<b>Usually takes maximum 30 seconds on slower connections.</b>
               	Countries in Violet are not included (will be fixed soon). Please send bug <a href="https://github.com/geekodour/newsmap-react/issues">
               	issues here</a>. and No, it is
               	not responsive.  
               	</div>
                <MapContainer/>
                
                </div>
            )
        }
      });


module.exports = Home;
