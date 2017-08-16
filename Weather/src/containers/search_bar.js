//Component that talk to redux is called Container or Smart Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: ""};
		//bind used here to join the onInputChange event to this object of constructor
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event) {
		this.setState({term: event.target.value});
	}
	onFormSubmit(event) {
		//Used to avoid reloading of form and url change after submit
		event.preventDefault();
		//After entering the data in input field once user clicks on enter/submit, onInputChange calls and will set the state with data entered and which eventually gets in this.state.term and passes to ActionCreator fetchWeather to get JSON data from ajax request.
		this.props.fetchWeather(this.state.term);
		//Once data sent to ajax request in ActionCreator we clear the state data
		this.setState({ term: '' });
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
				value={this.state.term} 
				placeholder="Get a five day forecast"
				className="form-control"
				onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

//This function is used to hook ActionCreator[fetchWeather] with Container Component[SearchBar]
function mapDispatchToProps(dispatch) {
	//When fetchWeather calls it will return the actions from ActionCreator and will dispatch to all the middlewares and reducers inside Redux App
	//By using this bind method we can able to access this.props.fetchWeather inside the Component SearchBar so, linking ActionCreator and Container.
	return bindActionCreators({ fetchWeather }, dispatch);
}

//null just to understand that Container is not considering the Redux State just to connect mapDispatchToProps and Container
export default connect(null, mapDispatchToProps)(SearchBar);