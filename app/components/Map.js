var React = require('react');
var PropTypes = React.PropTypes;

function Map(props){
	return (
			<div id="myMap">
				This is me teh map {props.country} fuck
			</div>
		)
}

Map.propTypes = {
	country: PropTypes.string.isRequired


}
module.exports = Map;