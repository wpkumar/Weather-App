//GoogleMap is seperated in order to reusability and simple solution.
import React, { Component } from 'react';

class GoogleMap extends Component {
	//Lifecycle method this will get called automatically once the component renders in the screen
	componentDidMount() {
		//this.refs.map will the return HTML element of google map defined in the below div
		new google.maps.Map(this.refs.map, {
			zoom: 12, 
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
	render() {
		return <div ref="map" />//ref acts as a container to render the google map
	}
}

export default GoogleMap;