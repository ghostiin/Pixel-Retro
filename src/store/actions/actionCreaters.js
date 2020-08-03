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
