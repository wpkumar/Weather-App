import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temp = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp - 273.15));
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;//lon and lat are the variable which gets value from the city data as ES6 feature

		return (
			<tr key={ name }>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temp} color="orange" units="&#176;C" /></td>
				<td><Chart data={pressure} color="green" units="hPa" /></td>
				<td><Chart data={humidity} color="yellow" units="%" /></td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (&#176;C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	//we can use ES6 feature instead of passing state as a argument and use it as state.weather we can user {weather} which is like const weather = state.weather. If we have key and value is same then in ES6 we can define the value name which is weather.
	return {weather}
}

export default connect(mapStateToProps)(WeatherList);