import { combineReducers } from 'redux';
import gridReducer from './gridReducer';
import canvasReducer from './canvasReducer';

export default combineReducers({
	grid: gridReducer,
	canvas: canvasReducer
});
