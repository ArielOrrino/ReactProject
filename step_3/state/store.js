import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './reducers/counter';

// STORE
const store = createStore(
  counterReducer,
  applyMiddleware(thunk),
);

export default store;
