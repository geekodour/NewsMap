var React = require('react');
var ReactRouter = require('react-router');

var MapContainer = require('../containers/MapContainer');

var Home = React.createClass({
    render: function(){
        return (
                <div>
                <div className="ui segment">
                <ul>
               	<li>This is a newsMap, uses very basic sentiment analysis to 
               	detect Happiness of different countries.</li>
                <li><b>Usually takes maximum 30 seconds to load on slower connections.</b>
               	Please send bug <a href="https://github.com/geekodour/newsmap-react/issues">
               	issues here</a> and No, it is
               	not responsive. </li>
                <li>Extremely Sorry Firefox users, the app works 90% on Firefox but has 
                <a href="https://github.com/geekodour/newsmap-react/issues/5"> some issues.</a> (click continue loading script if prompted) </li>
                </ul>
               	</div>
                <MapContainer/>
                
                </div>
            )
        }
      });


module.exports = Home;
