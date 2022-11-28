import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from 'redux';
  import thunk from 'redux-thunk';
 
  import { DataReducer } from '../Reducer/DataReducer';

  
  const rootReducer = combineReducers({ data:DataReducer });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );