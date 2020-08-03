import React, { useState, createContext, useEffect } from 'react';
import Top from './components/Top';
import Albums from './components/Albums';
// eslint-disable-next-line import/no-cycle
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';

export const drawContext = createContext(false);

function App() {
	const [ drawing, setDrawing ] = useState(false);

	// useEffect(
	// 	() => {
	// 		console.log(drawing);
	// 	},
	// 	[ drawing ]
	// );
	function stopDrawing() {
		setDrawing(false);
	}
	return (
		<drawContext.Provider value={{ drawing, setDrawing }}>
			<div
				onMouseUp={(ev) => stopDrawing(ev)}
				onTouchEnd={(ev) => stopDrawing(ev)}
				onTouchCancel={(ev) => stopDrawing(ev)}
				aria-hidden
			>
				<Top />
				<Albums />
				<Canvas />
				<Toolbar />
			</div>
		</drawContext.Provider>
	);
}

export default App;
