import axios from 'axios';

//API_KEY is frmo openweather key to get the 5 days weather details
const API_KEY = "495a19128899e2ee7e835e097a19a3e4";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},in`;
	//axios is similar like ajax request which is defined for browser based application gets URL and return request, it returns Promise Object
	const request = axios.get(url);
	//console.log('Request---', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}