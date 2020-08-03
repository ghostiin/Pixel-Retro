import React from 'react';
import Function from './Functions';
import Palette from './Palette';

const Toolbar = () => {
	return (
		<div className='toolbar-container'>
			<Function />
			<Palette />
		</div>
	);
};

export default Toolbar;
