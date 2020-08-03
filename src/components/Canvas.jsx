import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/actionCreaters';
import touchToId from '../utils/drawHelpers';
// eslint-disable-next-line import/no-cycle
import { drawContext } from '../App';
import * as tools from '../store/toolTypes';

const Canvas = () => {
	// const cols = 16;
	// const rows = 16;
	const { drawing, setDrawing } = useContext(drawContext);
	const { canvasSet, cols, rows, currentIndex, hoverIndex } = useSelector((state) => state.present.canvas);
	const { paletteColor } = useSelector((state) => state.present.palette);
	const currentCanvas = canvasSet[currentIndex];
	const grid = useSelector((state) => state.present.grid);
	const tool = useSelector((state) => state.present.tool);
	const dispatch = useDispatch();
	const cells = canvasSet[currentIndex];
	const gridStyle = {
		gridTemplatRows: `repeat(${rows}, 1fr)`,
		gridTemplateColumns: `repeat(${cols}, 1fr)`,
		touchAction: 'none' // 禁用 touchEv 的 passive->false
	};

	const changeCell = (id) =>
		paletteColor !== currentCanvas[id] || tool !== tools.PEN
			? dispatch(actionCreators.cellAction({ id, color: currentCanvas[id], paletteColor, rows, cols, tool }))
			: null;

	const cellStyle = (cell) => ({
		backgroundColor: cell || '#fff'
	});

	useEffect(() => {
		function getGridInfo() {
			const gridElement = document.getElementsByClassName('grid-container')[0];
			dispatch(actionCreators.getGridInfo(gridElement));
		}
		getGridInfo(); // resize?
	}, []);

	const onMouseDown = (ev, id) => {
		ev.preventDefault();
		if (!drawing) changeCell(id);
		setDrawing(true);
	};

	const onMouseOver = (ev, id) => {
		ev.preventDefault();
		if (drawing) changeCell(id);
	};

	const onTouchMove = (ev) => {
		ev.preventDefault();
		const id = touchToId(ev, cols, rows, currentCanvas, grid);
		if (drawing && id) {
			changeCell(id);
		}
	};

	return (
		<div className='canvas-container'>
			<div className='grid-container' style={gridStyle} onTouchMove={(ev) => onTouchMove(ev)}>
				{cells.map((cell, id) => {
					return (
						<div
							// eslint-disable-next-line react/no-array-index-key
							key={id}
							className='cell'
							style={cellStyle(cell)}
							onMouseDown={(ev) => onMouseDown(ev, id)}
							onFocus={(ev) => onMouseOver(ev, id)}
							onMouseOver={(ev) => onMouseOver(ev, id)}
							onTouchStart={(ev) => onMouseDown(ev, id)}
							aria-hidden
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Canvas;
