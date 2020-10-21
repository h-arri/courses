import {rootReducer, Rootstate} from './index';
import {applyMiddleware, createStore, Store} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const configureStore: Store<Rootstate> = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default configureStore;
