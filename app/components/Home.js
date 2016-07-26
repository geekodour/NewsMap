var React = require('react');
var ReactRouter = require('react-router');

var MapContainer = require('../containers/MapContainer');

var Home = React.createClass({
    render: function(){
        return (
                <div>
                <div className="ui segment">
		<h3>Note to note:</h3>
                <ul>
               	<li>This is a NewsMap, uses very basic sentiment analysis to 
               	detect <b>Happiness of different countries.</b></li>
                <li><b>Usually takes maximum 30 seconds to load on slower connections.</b>
               	Please send bug <a href="https://github.com/geekodour/newsmap-react/issues">
               	issues here and please help with the bugs if you have free time</a> and No, it is
               	not responsive. </li>
                <li>Extremely Sorry Firefox users, the app works 90% on Firefox but has 
                <a href="https://github.com/geekodour/newsmap-react/issues/5"> some issues.</a> (click continue loading script if prompted) Works fine on Chrome </li>
		<li> My first react app ^_^ </li>
                </ul>
               	</div>
                <MapContainer/>
                
                </div>
            )
        }
      });


module.exports = Home;
