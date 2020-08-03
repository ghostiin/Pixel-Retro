/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import undoable, { includeAction } from 'redux-undo';
import reducers from './reducers';
import * as types from './actions/actionTypes';

const filterActions = () => includeAction([ types.APPLY_PEN, types.APPLY_ERASER ]);

const store = createStore(
	undoable(reducers, {
		filter: filterActions(),
		debug: false,
		ignoreInitialState: true,
		limit: 30
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
