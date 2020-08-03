import produce from 'immer';
import * as types from '../actions/actionTypes';

const defaultState = {
	x: 0,
	y: 0,
	height: 0,
	width: 0
};

function getGridInfo(action) {
	const { x, y, width, height } = action.payload.getBoundingClientRect();
	return { x, y, width, height };
}

export default function gridReducer(state = defaultState, action) {
	return produce(state, (draftState) => {
		switch (action.type) {
			case types.GET_GRID_INFO:
				return getGridInfo(action);
			default:
				return draftState;
		}
	});
}
