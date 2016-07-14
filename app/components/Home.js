var React = require('react');
var ReactRouter = require('react-router');


var Home = React.createClass({
    render: function(){
        return (
                <div className='ui two column centered grid'>
                    <div className="column"><h1>Github Battle</h1>
                    <button className='ui button red block'>Let's get Started!</button>
                    </div>
                </div>
            )
        }
      });


module.exports = Home;
