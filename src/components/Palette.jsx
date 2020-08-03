import React from 'react';

const Palette = () => {
	const palette = Array(16).fill('#fff');
	return <div className='palette-container'>{palette.map((e) => <div style={{ backgroundColor: e }} />)}</div>;
};

export default Palette;
