import React from 'react';
import PropTypes from 'prop-types';
import * as tools from '../store/toolTypes';

const Function = ({ tool, chooseTool, undoFunc, redoFunc }) => {
	const choosePen = () => {
		chooseTool(tools.PEN);
		document.getElementsByClassName('pen')[0].classList.add('use-this-tool');
		document.getElementsByClassName('eraser')[0].classList.remove('use-this-tool');
	};
	const chooseEraser = () => {
		chooseTool(tools.ERASER);
		document.getElementsByClassName('pen')[0].classList.remove('use-this-tool');
		document.getElementsByClassName('eraser')[0].classList.add('use-this-tool');
	};
	return (
		<div className='function-container'>
			<span className='iconfont pen use-this-tool' onClick={choosePen} aria-hidden>
				&#xe639;
			</span>
			<span className='iconfont eraser' onClick={chooseEraser} aria-hidden>
				&#xe638;
			</span>
			<span className='iconfont palette'>&#xe9c1;</span>
			<span className='iconfont undo' onClick={undoFunc} aria-hidden>
				&#xe604;
			</span>
			<span className='iconfont redo' onClick={redoFunc} aria-hidden>
				&#xe605;
			</span>
		</div>
	);
};

Function.propTypes = {
	tool: PropTypes.string.isRequired,
	chooseTool: PropTypes.func.isRequired,
	undoFunc: PropTypes.func.isRequired,
	redoFunc: PropTypes.func.isRequired
};
export default Function;
