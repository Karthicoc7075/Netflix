import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
);

