/**
 * @flow
 */

'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

// For redux-persist v5:
const persistConfig = {
  key: 'root',
  blacklist: ['nav', 'posts', 'categories', 'post', 'form', 'home', 'settings'],
  storage,
};

// Transform original reducer to a persisted one.
const persistedReducer = persistReducer(persistConfig, rootReducer);

function CustomStore(initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { persistor, store };
}

export default CustomStore;
