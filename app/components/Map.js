var React = require('react');
var PropTypes = React.PropTypes;

function Map(props){
	return props.isLoading == true
			? <p> WAIT</p>
			: 
			<div id="myMap">
				This is me teh map {props.country} fuck
				THE DOPE STUFF : 
				{props.datStuff}
			</div>
}

Map.propTypes = {
	country: PropTypes.string.isRequired


}
module.exports = Map;