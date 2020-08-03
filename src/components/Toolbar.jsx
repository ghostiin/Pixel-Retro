import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Function from './Functions';
// eslint-disable-next-line import/no-named-as-default-member
import Palette from './Palette';
import * as actionCreators from '../store/actions/actionCreaters';

const Toolbar = () => {
	const tool = useSelector((state) => state.present.tool);
	const { palette, paletteColor } = useSelector((state) => state.present.palette);
	const dispatch = useDispatch();

	const chooseTool = (theTool) => {
		dispatch(actionCreators.switchTool(theTool));
	};

	const chooseColor = (theColor) => {
		dispatch(actionCreators.switchColor(theColor));
	};

	const undoFunc = () => dispatch(actionCreators.undo());
	const redoFunc = () => dispatch(actionCreators.redo());

	return (
		<div className='toolbar-container'>
			<Function tool={tool} chooseTool={chooseTool} undoFunc={undoFunc} redoFunc={redoFunc} />
			<Palette palette={palette} chooseColor={chooseColor} paletteColor={paletteColor} />
		</div>
	);
};

export default Toolbar;
