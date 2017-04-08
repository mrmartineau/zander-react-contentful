import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  ),
);

export default store;
