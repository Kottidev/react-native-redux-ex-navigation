
import { AsyncStorage, } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose, } from 'redux';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
import middleware from './middleware';

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(...middleware),
    devTools({
      name: 'Buddle', realtime: true
    })
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, {storage: AsyncStorage}, onCompletion);

  return store;
}
