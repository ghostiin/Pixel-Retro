import produce from 'immer';
import * as types from '../actions/actionTypes';

function createCanvas(action = {}) {
	const op = action.payload || {};
	const cols = parseInt(op.columns, 10) || 16;
	const rows = parseInt(op.rows, 10) || 17;
	return {
		canvasSet: [ new Array(cols * rows).fill('') ],
		cols,
		rows,
		currentIndex: 0,
		hoverIndex: undefined
	};
}
function drawCell(currentCanvas, color, id) {
	if (currentCanvas[id] !== color) {
		currentCanvas[id] = color;
	}
}

function applyPen(canvas, action) {
	const { paletteColor, id } = action;
	drawCell(canvas, paletteColor, id);
}

export default function canvasReducer(state = createCanvas(), action) {
	return produce(state, (draftState) => {
		switch (action.type) {
			case types.INIT_CANVAS:
			case types.CREATE_NEW_CANVAS:
				return createCanvas(action);
			case types.APPLY_PEN: {
				const currentCanvas = draftState.canvasSet[draftState.currentIndex];
				return applyPen(currentCanvas, action);
			}
			default:
				return draftState;
		}
	});
}
