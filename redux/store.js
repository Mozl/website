import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/rootReducer';
import { loadState } from './localStorage';
import initialState from './initialState';

export default function initializeStore() {
  const persistedState = loadState();
  return createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));
}
