import { applyMiddleware, compose, createStore } from 'redux';
// A middleware used when we have async operations and want to use dispatch
import thunk from 'redux-thunk';
import reducer from './reducers';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middleware)));

export default store;
