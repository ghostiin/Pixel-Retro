import React from 'react';
import Top from './components/Top';
import Iconfont from './assets/iconfont';
import ResetStyle from './theme/resetStyle';

function App() {
	return (
		<React.Fragment>
			<ResetStyle />
			<Iconfont />

			<Top />
		</React.Fragment>
	);
}

export default App;
