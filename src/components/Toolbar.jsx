import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Function from './Functions';
import Palette from './Palette';
import * as actionCreators from '../store/actions/actionCreaters';

const Toolbar = () => {
	const tool = useSelector((state) => state.tool);
	const dispatch = useDispatch();

	const chooseTool = (theTool) => {
		dispatch(actionCreators.switchTool(theTool));
	};

	return (
		<div className='toolbar-container'>
			<Function tool={tool} chooseTool={chooseTool} />
			<Palette />
		</div>
	);
};

export default Toolbar;
