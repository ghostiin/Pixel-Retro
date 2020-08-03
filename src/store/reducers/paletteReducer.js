import produce from 'immer';
import shortid from 'shortid';
import * as types from '../actions/actionTypes';

const createPalette = () =>
	[
		'#0F0500',
		'#252303',
		'#1F3807',
		'#0A4B10',
		'#126148',
		'#1D5D75',
		'#283688',
		'#64379E',
		'#B147B0',
		'#BF5781',
		'#CA7D6C',
		'#D6C386',
		'#C8DE9F',
		'#BAEAB7',
		'#D7F7E8',
		'#F2FCFD'
	].map((color) => ({ id: shortid.generate(), color }));

const defaultState = {
	palette: createPalette(),
	paletteColor: '#0F0500'
};

export default function paletteReducer(state = defaultState, action) {
	return produce(state, (draftState) => {
		switch (action.type) {
			case types.INIT_CANVAS:
			case types.CREATE_NEW_CANVAS:
				draftState.palette = createPalette();
				return draftState;
			case types.SWITCH_COLOR:
				draftState.paletteColor = action.payload;
				return draftState;
			default:
				return draftState;
		}
	});
}
