var React = require('react');
var ReactRouter = require('react-router');

var MapContainer = require('../containers/MapContainer');

var Home = React.createClass({
    render: function(){
        return (
                <div>
                I am home
                <MapContainer/>
                </div>
            )
        }
      });


module.exports = Home;
