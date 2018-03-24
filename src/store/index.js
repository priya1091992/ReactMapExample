import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

/**
 * Passing reducers, initial state and middleware to store.
 */
function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(thunk, createLogger)
  );
}

const store = configureStore();

export default store;
