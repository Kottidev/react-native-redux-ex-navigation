import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// log actions in development mode
const loggerMiddleware =  createLogger({
  collapsed: true,
  duration: true,

  // only log in development mode
  predicate: () => __DEV__,

  // transform immutable state to plain objects
  //stateTransformer: state => state.toJS(),

  // transform immutable action payloads to plain objects
  actionTransformer: (action) =>
    action && action.payload && action.payload.toJS
      ? {...action, payload: action.payload.toJS()}
      : action
});



// define store middlewares as an array
export default [
  promiseMiddleware,
  thunk,
  loggerMiddleware,
];
