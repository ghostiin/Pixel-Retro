import * as tools from '../toolTypes';
import * as types from '../actions/actionTypes';

export default function toolsReducer(state = tools.PEN, action) {
	switch (action.type) {
		case types.INIT_CANVAS:
		case types.CREATE_NEW_CANVAS:
			return tools.PEN;
		case types.SWITCH_TOOL:
			return action.payload;
		default:
			return state;
	}
}
