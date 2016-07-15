var React = require('react');
var ReactRouter = require('react-router');


var Home = React.createClass({
    render: function(){
        return (
                <div className='ui two column centered grid'>
                    <div className="ui container">
                        I love expensive stuff but love to live simple
                        <h3>and i love that</h3>
                    </div>
                </div>
            )
        }
      });


module.exports = Home;
