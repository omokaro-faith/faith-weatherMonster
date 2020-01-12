import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weather from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 export default () => {
  const store = createStore(weather, composeEnhancers(applyMiddleware(thunk)))
  return store;
 }