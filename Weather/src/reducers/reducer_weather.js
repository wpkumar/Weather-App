import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	//Redux will check if Actions payload has any object returned and if it was Promise object then middelware will unwrap/convert Promise Object to normal Object and returns to the reducer.
	//IF we dont have any Middelware then reducer need to wait until Action complete it's Promise request which will be again a bunch of code to be return to handle this request. But Redux-Promise Middleware does this magic where it will check if Promise Object returns; if not it stops the action and after Promise resolves then it creates a new action and returns the Object by converting it as normal object to Reducers
	//console.log('Action receiver ', action);
	switch(action.type) {
		case FETCH_WEATHER:
			//concat is used here to add the data into state after each search and as a thumb rule STATE data shouldnot be update directly by = symbol it should be based on setState. So we are using concat so that it wont update to existing state rather it creates a new instance of the state like super keyword.
			//vanilla JS --> return state.concat([action.payload.data]);
			return [action.payload.data, ...state];
	}
	return state;
}	

