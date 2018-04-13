import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { middleware as callAPIMiddleware } from 'lib/callAPI';
import rootReducer from '../reducers';
import initialState from './initialState';

const configureStore = () => {
  const middleware = [thunk, callAPIMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').default;
    middleware.push(logger);
    middleware.push(reduxImmutableStateInvariant());
  }

  let enhancer = applyMiddleware(...middleware);
  if (process.env.NODE_ENV !== 'production') {
    enhancer = composeWithDevTools(enhancer);
  }
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
