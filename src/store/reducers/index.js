import { combineReducers } from 'redux';
import gridReducer from './gridReducer';
import canvasReducer from './canvasReducer';
import toolsReducer from './toolsReducer';
import paletteReducer from './paletteReducer';

export default combineReducers({
	grid: gridReducer,
	canvas: canvasReducer,
	tool: toolsReducer,
	palette: paletteReducer
});
