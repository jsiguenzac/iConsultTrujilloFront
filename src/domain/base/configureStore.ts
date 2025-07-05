import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import reducers from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function configureStore() {
  const store: Store = createStore(reducers, applyMiddleware(...middlewares));
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { persistor, store };
}
