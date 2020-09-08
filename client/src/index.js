import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import * as firebase from 'firebase'
import thunk from 'redux-thunk';

var config = {
  apiKey: "AIzaSyC7dRUYy2vVHknCsRy4L0rB5Zd7GC4sLyY",
  authDomain: "takatakite-9b6cc.firebaseapp.com",
  databaseURL: "https://takatakite-9b6cc.firebaseio.com",
  projectId: "takatakite-9b6cc",
  storageBucket: "takatakite-9b6cc.appspot.com",
  messagingSenderId: "536092681569"
};
firebase.initializeApp(config);


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['preferences']
}

const persistedReducer = persistReducer(persistConfig, allReducers)

let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
let persistor = persistStore(store)


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
