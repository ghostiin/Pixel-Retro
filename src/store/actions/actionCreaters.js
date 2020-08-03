import { ActionCreators } from 'redux-undo';
import * as types from './actionTypes';

export function getGridInfo(gridElement) {
	return {
		type: types.GET_GRID_INFO,
		payload: gridElement
	};
}

export function cellAction({ id, color, columns, rows, tool = 'PEN', paletteColor = '#000' }) {
	return {
		type: `APPLY_${tool}`,
		id,
		color,
		paletteColor,
		columns,
		rows
	};
}

export function switchTool(tool) {
	return {
		type: types.SWITCH_TOOL,
		payload: tool
	};
}
export function switchColor(color) {
	return {
		type: types.SWITCH_COLOR,
		payload: color
	};
}

export function undo() {
	return ActionCreators.undo();
}

export function redo() {
	return ActionCreators.redo();
}
